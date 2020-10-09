import puppeteer from "puppeteer";

const renderApp = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  await page.screenshot({ path: "example.png" });

  await browser.close();
};

const tenRenders = new Array(5).fill(renderApp);
let renderCount = 0;

tenRenders.reduce((prev: any, present: any) => {
  return prev.then(() => {
    console.log(`render count: ${renderCount}`);
    renderCount++;
    return present();
  });
}, Promise.resolve());
