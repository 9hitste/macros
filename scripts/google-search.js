//-- Config Start --
const keywords = ["9hits", "9hits awesome"]; //the script will take random one
const targetPattern = "9hits.com"; //can be a domain, a part of an URL
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
        Log("Next page...");
        await ClickBySelector (isMobile ? "#botstuff a[href^='/search?q=']" : "#pnnext");
        await WaitForLoading ();
        await Delay(5000);
    }
}
while(--maxpage > 0);


if(found) {
    //do more action after the target site is loaded
    Log("Finished");
}
else Log("Not found");