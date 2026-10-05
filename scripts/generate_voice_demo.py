"""
Generates natural neural-voice MP3 clips for the hero AI voice demo.

Output: public/audio/<industry>/<persona>/<line_index>.mp3
Run:    python scripts/generate_voice_demo.py
Requires: pip install edge-tts
"""
import asyncio
import os
import re

import edge_tts

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "audio")

# Receptionist personas -> (voice, rate, pitch). Slightly faster than default for an energetic, natural pace.
PERSONAS = {
    "sophia": ("en-US-AvaNeural", "+8%", "+0Hz"),
    "charlotte": ("en-GB-SoniaNeural", "+6%", "+0Hz"),
}

# Caller voices per industry (male callers).
CALLERS = {
    "dentist": ("en-US-AndrewNeural", "+4%", "-2Hz"),
    "hvac": ("en-US-BrianNeural", "+6%", "-2Hz"),
}

# Must match the dialogue text in src/components/home/HeroAiVoiceConsole.tsx (same order).
DIALOGUE = {
    "dentist": [
        ("R", "Thank you for calling Apex Dental! My name is {NAME}, your dental receptionist. How can I assist you today?"),
        ("C", "Hi {NAME}, I have a severe toothache and need an emergency appointment with Dr. Thorne."),
        ("R", "I am so sorry to hear you're in pain! I have an emergency opening with Dr. Thorne tomorrow at 11:00 AM, or Thursday at 2:00 PM. Which works best for you?"),
        ("C", "Tomorrow at 11:00 AM works great."),
        ("R", "Tomorrow at 11:00 AM is reserved! May I please have your full name and best callback phone number?"),
        ("C", "My name is Michael Roberts, and my phone number is 713-555-0148."),
        ("R", "Thank you, Michael! Your dental appointment with Dr. Thorne for tomorrow at 11:00 AM is confirmed. We just sent an SMS confirmation to 713-555-0148. Have a wonderful day!"),
    ],
    "hvac": [
        ("R", "Thank you for calling Apex Heating and Air! I am {NAME}, your emergency service dispatcher. How can we help you today?"),
        ("C", "Hi {NAME}, our central AC completely stopped cooling and the house is 85 degrees. Can someone come out today?"),
        ("R", "I completely understand how urgent that is in this heat! We have a priority dispatch slot today between 1:00 PM and 3:00 PM with our senior technician, Marcus. Shall I lock that in for you?"),
        ("C", "Yes please, between 1 and 3 PM is perfect."),
        ("R", "You're locked in! May I please have your full name, service address, and best callback phone number?"),
        ("C", "My name is David Thorne, 4208 Westheimer Rd, and my phone number is 713-555-0177."),
        ("R", "Thank you, David! Marcus is dispatched for today between 1 and 3 PM. Confirmation code AC-940 has been sent to 713-555-0177. Help is on the way!"),
    ],
}


def spoken(text: str) -> str:
    """Make numbers and abbreviations read naturally, like a real phone call."""
    # Phone numbers: 713-555-0148 -> "7 1 3, 5 5 5, 0 1 4 8"
    text = re.sub(
        r"\b(\d{3})-(\d{3})-(\d{4})\b",
        lambda m: ", ".join(" ".join(g) for g in m.groups()),
        text,
    )
    text = text.replace("AC-940", "A C 9 4 0")
    text = text.replace("Westheimer Rd", "Westheimer Road")
    text = text.replace("SMS", "S M S")
    text = text.replace(":00 AM", " A M").replace(":00 PM", " P M")
    return text


async def synth(text: str, voice: str, rate: str, pitch: str, path: str) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    await edge_tts.Communicate(text, voice, rate=rate, pitch=pitch).save(path)


async def main() -> None:
    jobs = []
    for industry, lines in DIALOGUE.items():
        for persona, (r_voice, r_rate, r_pitch) in PERSONAS.items():
            name = persona.capitalize()
            for idx, (speaker, raw) in enumerate(lines):
                text = spoken(raw.replace("{NAME}", name))
                if speaker == "R":
                    voice, rate, pitch = r_voice, r_rate, r_pitch
                else:
                    voice, rate, pitch = CALLERS[industry]
                out = os.path.join(ROOT, industry, persona, f"{idx}.mp3")
                jobs.append(synth(text, voice, rate, pitch, out))
    await asyncio.gather(*jobs)
    print(f"Generated {len(jobs)} clips in {os.path.abspath(ROOT)}")


if __name__ == "__main__":
    asyncio.run(main())

