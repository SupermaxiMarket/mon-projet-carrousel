import puppeteer from 'puppeteer';
import fs from 'fs';
import { execSync } from 'child_process';

async function generateVideoWithMusic() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1080, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const baseUrl = process.env.URL || 'http://localhost:3000';
  const slidesCount = 10;
  const frames = [];

  console.log('📸 Capture des slides...');
  for (let i = 0; i < slidesCount; i++) {
    await page.goto(`${baseUrl}/carrousel?slide=${i}`, {tUntil: 'networkidle2' });
    const filename = `slide_${i + 1}.png`;
    await page.screenshot({ path: filename });
    frames.push(filename);
  }
  await browser.close();

  const inputList = frames.map((f) => `file '${f}'\nduration 2`).join('\n');
  fs.writeFileSync('frames.txt', inputList);

  console.log('🎬 Génération de la vidéo...');
  execSync(`ffmpeg -f concat -safe 0 -i frames.txt -vf "scale=1080:1080,fade=t=in:st=0:d=1,fade=t=out:st=1:d=1,format=yuv420p" -r 30 temp.mp4 -y`);

  if (fs.existsSync('fond_musical.mp3')) {
    execSync(`ffmpeg -i temp.mp4 -i fond_musical.mp3 -shortest -af "afade=t=in:ss=0:d=2,afade=t=out:st=18:d=2" -c:v libx264 -pix_fmt yuv420p output_music.mp4 -y`);
  } else {
    execSync(`ffmpeg -i temp.mp4 -c:v libx264 -pix_fmt yuv420p output.mp4 -y`);
  }

  console.log('✅ Vidéo générée avec succès !');
}

generateVideoWithMusic();
