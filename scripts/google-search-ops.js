await Delay(Random(2500,3000));
await WaitForLoading();
var page, scrl, random_keyword;
var clicks = Random(13,25);
var max_page = Random(3,5);
var myDomain = "9hits.com";
var keywords = [
    "auto traffic exchange",
    "traffic exchange system",
    "traffic exchange",
    "automated traffic exchange"
    ];
    if ( await EvaluateScript("!! document.querySelector('input.gLFyf.gsfi')") ) {
        await ClickByXpath(GenerateXpath("input", "type", "text"));
    } else if ( await EvaluateScript("!! document.querySelector('input.gLFyf')") ) {
        await ClickByXpath(GenerateXpath("input", "type", "search"));
    } else {
        Exit();
    }
    await Delay(Random(2500,3000));
    random_keyword = Math.floor(Math.random() * keywords.length);
    await Typing (keywords[random_keyword], 300, 500);
    await Delay(Random(500,1000));
    await Typing ("\r\n");
    await Delay(Random(2500,3000));
    await WaitForLoading();
    page = 1;
    do {
        do { //scroll
            scrl = Random(3,9);
            for (var i = 1; i < scrl; i++) {
                await EvaluateScript("var ddE = document.documentElement; ddE.scrollTo(0, ddE.clientHeight/(Math.floor(Math.random()*3)+9) + ddE.scrollTop);");
                await Delay(Random(100,150));
            }
            await Delay (Random(1000,1500));
        } while (await EvaluateScript("var ddE = document.documentElement; ddE.clientHeight+ddE.scrollTop < ddE.scrollHeight"))
        myTargetXpath = GenerateXpath("a", "href", "%" + myDomain + "%");
        foundLink = await GetAttribute(myTargetXpath, "href");
        if ( foundLink ) {
            await ClickByXpath(myTargetXpath);
            break;
        }
        else if (page < max_page) {
            if ( await EvaluateScript("!! document.getElementById('pnnext')") ) {
                await ClickById("pnnext");
            } else if (await EvaluateScript("!! document.querySelector('span.RVQdVd')")) {
                await ClickByXpath(GenerateXpath("span", "class", "RVQdVd"));
            } else {
                Exit();
            }
            await Delay(Random(2500,3000));
            await WaitForLoading();
        }
        else {
            await EvaluateScript("window.open('https://" + myDomain + "','_self')");
        }
        page = page+1;
    } while (page <= max_page)
    do {
        await Delay(Random(2500,3000));
        await WaitForLoading();
        do { //scroll
            scrl = Random(3,9);
            for (var i = 1; i < scrl; i++) {
                await EvaluateScript("var ddE = document.documentElement; ddE.scrollTo(0, ddE.clientHeight/(Math.floor(Math.random()*3)+9) + ddE.scrollTop);");
                await Delay(Random(100,150));
            }
            await Delay (Random(1000,1500));
        } while (await EvaluateScript("var ddE = document.documentElement; ddE.clientHeight+ddE.scrollTop < ddE.scrollHeight"))
        await Delay(Random(5000,7000));
        await ClickRandomInternalLink(true);
    } while (--clicks)
    await Delay(Random(5000,7000));
    await WaitForLoading();
Exit();
