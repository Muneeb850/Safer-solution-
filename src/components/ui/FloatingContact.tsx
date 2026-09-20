import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, MessageSquare } from 'lucide-react';

const contacts = [
  {
    icon: Phone,
    label: 'Call Us Now',
    sub: '713-364-5155',
    href: 'tel:713-364-5155',
    color: '#6366F1',
    bg: '#6366F1',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    sub: 'Chat instantly',
    href: 'https://wa.me/17133645155',
    color: '#25D366',
    bg: '#25D366',
  },
  {
    icon: Mail,
    label: 'Email Us',
    sub: 'safersolutionllc@gmail.com',
    href: 'mailto:safersolutionllc@gmail.com',
    color: '#EC4899',
    bg: '#EC4899',
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
      {/* Expanded contact options */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex flex-col gap-2"
          >
            {/* Header label */}
            <div className="text-right mb-1">
              <span className="text-[11px] text-[#94A3B8] font-mono uppercase tracking-wider">Get in touch</span>
            </div>

            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl backdrop-blur-xl border border-white/10 bg-[#040816]/90 hover:bg-[#0F1535] transition-all duration-200 shadow-xl group"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${c.bg}20`, border: `1px solid ${c.color}40` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: c.color }} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">{c.label}</div>
                    <div className="text-[10px] text-[#94A3B8] truncate max-w-[160px]">{c.sub}</div>
                  </div>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Toggle Button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl focus:outline-none"
        style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: open ? '0 0 0 0 rgba(99,102,241,0)' : ['0 0 0 0 rgba(99,102,241,0.4)', '0 0 0 16px rgba(99,102,241,0)'] }}
        transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
        aria-label="Open contact options"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
