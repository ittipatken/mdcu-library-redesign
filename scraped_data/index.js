const { default: puppeteer } = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://library.md.chula.ac.th/");
    
    const grabWebsites = await page.evaluate(() => {
        const webTags = document.querySelectorAll("font li a");
        let Links = [];
        webTags.forEach((tag) => {
            Links.push(tag.getAttribute("href"));
        });
        let Names = [];
        webTags.forEach((tag) => {
            Names.push(tag.innerText);
        });
        return {Links, Names};
    });
    const {Links, Names} = grabWebsites;
    // console.log(Links);
    // console.log(Names);
    await browser.close();
    require('fs').writeFile(

        './Names.json',
    
        JSON.stringify(Names, null, 1),
    
        function (err) {
            if (err) {
                console.error('Crap happens');
            }
        }
    );
})();