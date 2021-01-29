const puppeteer = require('puppeteer');
const url = process.argv[2];

console.log(process.argv);
if (!url) {
  throw 'Please provide URL as a first argument';
}
async function run() {
	// better to program url programatically with hhtps
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: 'screenshot.png' });
  browser.close();
}
run();
