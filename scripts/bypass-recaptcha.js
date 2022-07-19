/*
To run this demo, please use this URL:
https://www.google.com/recaptcha/api2/demo
Also replace YOUR_API_KEY with your 2captcha/anti-captcha API key
See demo: https://youtu.be/v-6c6ckUNpE
*/

await WaitForLoading ();
await SolveRecaptcha("2captcha", "YOUR_API_KEY"); //you may use "anti-captcha" instead of "2captcha"
await ClickBySelector('#recaptcha-demo-submit'); //click submit button