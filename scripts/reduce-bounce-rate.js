//Wait until the web page is finished loading
await WaitForLoading ();
while(true) //loop forever
{
    await Delay (10000, 20000); //delay randomly between 10-20 seconds, you may change it depends on your duration setting
    await ClickRandomInternalLink();
}