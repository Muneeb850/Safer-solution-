import os
import subprocess
from PIL import Image

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT_DIR, exist_ok=True)

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
if not os.path.exists(CHROME_PATH):
    CHROME_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

# 1. Dark Slate SVG (for light backgrounds)
svg_dark = """<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.5 7.5C23.2 4.2 17.5 4.5 13.2 8.2C9.5 11.4 8.5 16 11.5 19.5C14.2 22.5 19 21.8 23.5 24C27.2 25.8 28.5 29.5 26.2 32.2C23.8 35 18.2 35.2 13 32.2" stroke="#0F172A" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.5 15.5C10.5 11 15 7.5 20.5 7.5C24.5 7.5 27.5 9.8 27.5 13.5C27.5 18 21.5 19.5 16.5 21.5C11.5 23.5 8.5 27 10.5 31C11.8 33.5 15.5 35 19.5 34.5" stroke="#1E293B" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="18.5" cy="20.5" r="1.8" fill="#D4AF37"/>
</svg>"""

with open(os.path.join(OUT_DIR, "logo_icon_dark.svg"), "w", encoding="utf-8") as f:
    f.write(svg_dark)

# 2. White SVG (for dark backgrounds)
svg_white = """<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.5 7.5C23.2 4.2 17.5 4.5 13.2 8.2C9.5 11.4 8.5 16 11.5 19.5C14.2 22.5 19 21.8 23.5 24C27.2 25.8 28.5 29.5 26.2 32.2C23.8 35 18.2 35.2 13 32.2" stroke="#FFFFFF" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.5 15.5C10.5 11 15 7.5 20.5 7.5C24.5 7.5 27.5 9.8 27.5 13.5C27.5 18 21.5 19.5 16.5 21.5C11.5 23.5 8.5 27 10.5 31C11.8 33.5 15.5 35 19.5 34.5" stroke="#E2E8F0" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="18.5" cy="20.5" r="1.8" fill="#D4AF37"/>
</svg>"""

with open(os.path.join(OUT_DIR, "logo_icon_white.svg"), "w", encoding="utf-8") as f:
    f.write(svg_white)

# 3. HTML pages for high-definition 1024x1024 rendering
html_dark_transparent = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1024px; height: 1024px; background: transparent; display: flex; align-items: center; justify-content: center; }
  svg { width: 820px; height: 820px; filter: drop-shadow(0 12px 24px rgba(15, 23, 42, 0.15)); }
</style>
</head>
<body>
""" + svg_dark + """
</body>
</html>"""

html_avatar_dark = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1024px;
    height: 1024px;
    background: radial-gradient(circle at 50% 35%, #1A2238 0%, #0A0D14 70%, #05070A 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .glow {
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(124, 58, 237, 0.12) 40%, transparent 70%);
    border-radius: 50%;
    filter: blur(40px);
  }
  svg {
    width: 600px;
    height: 600px;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6));
  }
</style>
</head>
<body>
  <div class="glow"></div>
""" + svg_white + """
</body>
</html>"""

html_app_icon = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1024px;
    height: 1024px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    width: 900px;
    height: 900px;
    border-radius: 200px;
    background: linear-gradient(145deg, #131722 0%, #090B10 100%);
    border: 3px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .glow {
    position: absolute;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, transparent 65%);
    filter: blur(30px);
  }
  svg {
    width: 520px;
    height: 520px;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.5));
  }
</style>
</head>
<body>
  <div class="card">
    <div class="glow"></div>
""" + svg_white + """
  </div>
</body>
</html>"""

def render_html_to_png(html_content, out_png_path, bg_color="00000000"):
    temp_html = out_png_path + ".temp.html"
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    cmd = [
        CHROME_PATH,
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--hide-scrollbars",
        f"--default-background-color={bg_color}",
        "--window-size=1024,1024",
        f"--screenshot={out_png_path}",
        temp_html
    ]
    subprocess.run(cmd, check=True)
    if os.path.exists(temp_html):
        os.remove(temp_html)
    print(f"Generated: {out_png_path}")

print("Rendering high-res logo PNG assets...")
render_html_to_png(html_dark_transparent, os.path.join(OUT_DIR, "safer_solution_logo_dark.png"), "00000000")
render_html_to_png(html_avatar_dark, os.path.join(OUT_DIR, "safer_solution_avatar.png"), "05070AFF")
render_html_to_png(html_app_icon, os.path.join(OUT_DIR, "safer_solution_app_icon.png"), "00000000")

# Also copy primary as safer_solution_icon.png
dark_png = Image.open(os.path.join(OUT_DIR, "safer_solution_logo_dark.png"))
# Save at standard resolutions (512, 256, 128)
dark_png.resize((512, 512), Image.LANCZOS).save(os.path.join(OUT_DIR, "safer_solution_icon_512.png"))
dark_png.resize((256, 256), Image.LANCZOS).save(os.path.join(OUT_DIR, "safer_solution_icon_256.png"))
dark_png.resize((64, 64), Image.LANCZOS).save(os.path.join(OUT_DIR, "safer_solution_icon_64.png"))

print("All logo files generated successfully!")
