// Vercel Serverless Function: POST /api/contact
// Sends contact-form submissions to the Safer Solution inbox via Resend.
// The API key is read from the RESEND_API_KEY environment variable and is never exposed to the browser.

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'safersolutionllc@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Safer Solution <onboarding@resend.dev>';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid request body.' });
    }
  }

  const { name, email, phone, service, message, website } = body || {};

  // Honeypot field: real users never fill this in, bots often do.
  if (website) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (String(message).length > 5000 || String(name).length > 200) {
    return res.status(400).json({ error: 'Your message is too long.' });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; color: #0F172A;">
      <h2 style="margin-bottom: 4px;">New Website Inquiry</h2>
      <p style="color: #64748B; margin-top: 0;">Submitted via the Safer Solution contact form</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td>${escapeHtml(phone)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Service</td><td>${escapeHtml(service || 'Not specified')}</td></tr>
      </table>
      <h3 style="margin-top: 24px;">Project Details</h3>
      <p style="white-space: pre-wrap; background: #F8FAFC; padding: 16px; border-radius: 8px; border: 1px solid #E2E8F0;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New Inquiry: ${String(service || 'General')} - ${String(name)}`,
        html,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error('Resend error:', data);
      const detail = data?.message || 'Failed to send message. Please try again or call us directly.';
      return res.status(502).json({ error: detail });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
}
