/*
To run this, please use your URL
after implementing ads from 
https://adstargets.com/myAdstargets/?rid=4805
*added an exit at the end to decrease points usage
*/
await WaitForLoading ();
await ClickRandomInternalLink();
ScrollTo (300, 500);
await WaitForLoading ();
await ClickBySelector("iframe[src*='adstargets.com/myAdstargets/display']", "random");
await WaitForLoading ();
ScrollTo (300, 500);
await Delay(3000, 10000);
Exit();
