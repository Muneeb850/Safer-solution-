import asyncio
import os
import re
import urllib.request
import urllib.error
import json
import edge_tts

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "audio")

VOICE_CONFIG = {
    "sarah": {
        "voice_id": "EXAVITQu4vr4xnSDxMaL",  # Sarah (ElevenLabs Mature, Executive, Professional)
        "stability": 0.50,
        "similarity_boost": 0.75,
        "style": 0.30,
    }
}

CALLER_CONFIG = {
    "dentist": {
        "voice_id": "iP95p4xoKVk53GoZ742B",  # Chris (Natural American male caller)
        "stability": 0.50,
        "similarity_boost": 0.75,
    },
    "hvac": {
        "voice_id": "cjVigY5qzO86Huf0OWal",  # Eric (Confident American male caller)
        "stability": 0.50,
        "similarity_boost": 0.75,
    },
}

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
        ("C", "My name is David Thorne, 4208 Westheimer Road, and my phone number is 713-555-0177."),
        ("R", "Thank you, David! Marcus is dispatched for today between 1 and 3 PM. Confirmation code AC-940 has been sent to 713-555-0177. Help is on the way!"),
    ],
}

def spoken(text: str) -> str:
    text = re.sub(
        r"\b(\d{3})-(\d{3})-(\d{4})\b",
        lambda m: ", ".join(" ".join(g) for g in m.groups()),
        text,
    )
    text = text.replace("AC-940", "A C 940")
    text = text.replace("SMS", "S M S")
    return text

def generate_elevenlabs_clip(api_key: str, text: str, voice_cfg: dict, out_path: str):
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    voice_id = voice_cfg["voice_id"]
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}?optimize_streaming_latency=2"
    
    payload = {
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {
            "stability": voice_cfg.get("stability", 0.50),
            "similarity_boost": voice_cfg.get("similarity_boost", 0.75),
            "style": voice_cfg.get("style", 0.30),
            "use_speaker_boost": True
        }
    }
    
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "xi-api-key": api_key,
            "User-Agent": "SaferSolution-AudioGen"
        }
    )
    
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
        with open(out_path, "wb") as f:
            f.write(data)
        print(f"[ElevenLabs] Generated: {out_path} ({len(data)} bytes)")

async def generate_priya_receptionist_clip(text: str, out_path: str):
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    communicate = edge_tts.Communicate(text, "en-IN-NeerjaNeural", rate="+6%")
    await communicate.save(out_path)
    print(f"[Edge-TTS Neerja] Generated: {out_path} ({os.path.getsize(out_path)} bytes)")

async def main():
    api_key = os.environ.get("ELEVENLABS_API_KEY")
    if not api_key:
        env_file = os.path.join(os.path.dirname(__file__), "..", ".env.local")
        if os.path.exists(env_file):
            with open(env_file) as f:
                for line in f:
                    if line.startswith("ELEVENLABS_API_KEY="):
                        api_key = line.strip().split("=", 1)[1].strip()
                        break
                        
    if not api_key:
        print("ERROR: ELEVENLABS_API_KEY not found.")
        return

    print(f"Using ElevenLabs Key: {api_key[:6]}...{api_key[-4:]}")

    # 1. Generate Sarah (All 7 steps for dentist and hvac)
    print("\n--- Generating Sarah (ElevenLabs) ---")
    for industry, lines in DIALOGUE.items():
        for idx, (speaker, raw) in enumerate(lines):
            text = spoken(raw.replace("{NAME}", "Sarah"))
            cfg = VOICE_CONFIG["sarah"] if speaker == "R" else CALLER_CONFIG[industry]
            out_path = os.path.join(ROOT, industry, "sarah", f"{idx}.mp3")
            generate_elevenlabs_clip(api_key, text, cfg, out_path)

    # 2. Generate Priya (Indian receptionist en-IN-NeerjaNeural + ElevenLabs caller)
    print("\n--- Generating Priya (Indian English Receptionist) ---")
    for industry, lines in DIALOGUE.items():
        for idx, (speaker, raw) in enumerate(lines):
            text = spoken(raw.replace("{NAME}", "Priya"))
            out_path = os.path.join(ROOT, industry, "priya", f"{idx}.mp3")
            if speaker == "R":
                await generate_priya_receptionist_clip(text, out_path)
            else:
                # Caller from ElevenLabs saying "Hi Priya..."
                generate_elevenlabs_clip(api_key, text, CALLER_CONFIG[industry], out_path)

    print("\nAll Sarah and Priya audio clips successfully generated!")

if __name__ == "__main__":
    asyncio.run(main())
