//-- Config Start -- UPDATE JAN 2024 - WORKING DESKTOP TRAFFIC ONLY 
const keywords = ["9Hits", "9Hits Awesome","9Hits Traffic"]; //the script will take random one
const targetPattern = "9hits.com"; //can be a domain, a part of an URL
const _2CaptchaAPIKey="";//In case we get a captcha when searching, 9hits will try to solve it if you set this API key, otherwise the browser will exit
let maxpage = 3;
//-- Config End --

//Wait until the web page is finished loading
await WaitForLoading();
const isMobile = IsMobile ();
if(isMobile) { //if current visitor is mobile, we need to click to the search box
    await ClickBySelector("input[name='q']");
    await Delay(1000);
}

await Typing (`${RandomArray(keywords)}\r`, 50, 100); // \r means hit Enter key after entered the keyword
await WaitForLoading();

await Delay(3000);

//check if google show captcha
if((await EvalScript ('location.pathname=="/sorry/index"'))) {
    if(_2CaptchaAPIKey) {
        const r = await SolveRecaptcha ("2captcha", _2CaptchaAPIKey);
        if(r && r.request) await TryToCallRecaptchaCallBack (r.request);
        else {
            Exit();
            return;
        }
    }
    else {
        Exit();
        return;
    }
}

const targetSelector = `a[href*="${targetPattern}"]`;
let found = false;
//start looking for the target
do {
    const target = await EvalScript (`document.querySelector('${targetSelector}')`);
    if(target) {
        Log("Found", target.href);
        found = true;
        await ClickBySelector (targetSelector);
        await WaitForLoading ();
        break; //exit the loop
    }
    else {
        do { //scroll
    scrl = Random(3,9);
    for (var i = 1; i < scrl; i++) {
        await EvaluateScript("var ddE = document.documentElement; ddE.scrollTo(0, ddE.clientHeight/(Math.floor(Math.random()*3)+9) + ddE.scrollTop);");
        await Delay(Random(100,150));
    }
    await Delay (Random(1000,1500));
    myTargetXpath = GenerateXpath("a", "href", "%" + targetPattern + "%");
    foundLink = await GetAttribute(myTargetXpath, "href");
} while (!foundLink)
    }
}
while(--maxpage > 0);


if(found) {
    //do more action after the target site is loaded
    Log("Finished");
}
else Log("Not found");
Exit();
