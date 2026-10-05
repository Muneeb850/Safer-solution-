import urllib.request
import urllib.error
import json

def check():
    url = "https://api.elevenlabs.io/v1/voices"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    res = urllib.request.urlopen(req)
    data = json.loads(res.read().decode())
    print(f"Total Voices: {len(data.get('voices', []))}\n")
    for v in data.get('voices', []):
        labels = v.get('labels', {})
        name = v.get('name')
        gender = labels.get('gender', 'unknown')
        accent = labels.get('accent', 'unknown')
        desc = labels.get('description', '')
        vid = v.get('voice_id')
        print(f"{name:15} | {gender:7} | {accent:10} | {desc:25} | {vid}")

if __name__ == '__main__':
    check()
