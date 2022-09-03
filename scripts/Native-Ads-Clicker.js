/*
To run this, please use your URL
after implementing ads ( Type Native Widget)
COMPANY: https://bit.ly/3wQ5m7p
Note: 
-eCPM is very low so it may consume a lot of points
-Make 2-5 clicks on each 100 visits to stay safe
*added an exit at the end to decrease points usage
*/

await WaitForLoading ();
ScrollTo (300, 500);
await WaitForLoading ();
await ClickByClass("bdv_native_txt_title", "random");
await WaitForLoading ();
await ClickRandomLink();
await WaitForLoading ();
Exit();
