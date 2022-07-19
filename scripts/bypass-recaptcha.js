/*
To run this demo, please use this URL: https://captcha.com/demos/features/captcha-demo.aspx
Also replace YOUR_API_KEY with your 2captcha/anti-captcha API key
See demo: https://youtu.be/v-6c6ckUNpE
*/

await WaitForLoading ();
await SolveImageCaptcha("#demoCaptcha_CaptchaImage", "#captchaCode", "2captcha", "YOUR_API_KEY"); //you may use "anti-captcha" instead of "2captcha"
await ClickBySelector ("#validateCaptchaButton"); //click the validate button