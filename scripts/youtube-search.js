//-- Config Start --
const keywords = ["9hits macros", "9hits awesome"]; //the script will take random one
const videoId = "bBaQfKSjeIo";
let maxpage = 3;
//-- Config End --

await WaitForLoading();

let searchBoxSelector = "input#search";
let resultListSelector = "ytd-item-section-renderer";
let videoSelector = `ytd-video-renderer a#video-title[href*="${videoId}"]`;

if(IsMobile ()) {//mobile would be different from desktop
    searchBoxSelector = ".non-search-mode button";
    resultListSelector = "ytm-item-section-renderer";
    videoSelector = `ytm-compact-video-renderer a[href*="${videoId}"]`;
}

await ClickBySelector (searchBoxSelector);
await Delay(2000);
await Typing (`${RandomArray (keywords)}\r`);

//wait for the result page
while(await EvaluateScript(`!document.querySelector("${resultListSelector}")`))
{
    await Delay(1000);
}


while(maxpage-- >= 0 && !(await EvalScript (`document.querySelector('${videoSelector}')`))) {
    await SendKeyPress(35);//END keys
    await Delay(1000);
    await SendMouseWheel(0, -Random(500, 600));
    await Delay(5000); //wait for load more videos
}
  
if(maxpage < 0) {
    Log("Not found");
}
else {
    Log("Clicking video...");
    await ClickBySelector(videoSelector);
}