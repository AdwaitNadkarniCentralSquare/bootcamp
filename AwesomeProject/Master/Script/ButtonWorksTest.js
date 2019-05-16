
//Run Testcomplete as administrator
//Install browser extension from chrome.google.com/webstore/detail/smartbear-test-extension/gmhjclgpamdccpomoomknemhmmialaae
function ButtonWorksTest()
{
  try
  {
    var CALCULATOR_SITE = "https://www.calculator.com/";
  
    //Run chrome as our browser
    Browsers.Item("Chrome").Run();
    
    //Go to 
    Sys.Browser("*").ToUrl(CALCULATOR_SITE);
    var currentPage = Sys.Browser("*").WaitPage(CALCULATOR_SITE, 0, 5000);    

    //3 ways of grabbing button - you just need one
    var oneButtonTestCompleteFind = currentPage.Find(["nodeName", "value"], ["INPUT", 1], 1000); //Testcomplete specific
    var oneButtonFindByXPath = currentPage.FindChildByXPath("//INPUT[@value='1']"); //refer cheatsheet https://devhints.io/xpath#class-check
    //var oneButtonJQuerySelector = currentPage.contentDocument.Script.$("INPUT[value='1']"); //Didn't work on this page for me
    
    //TESTCASE: Click a button and confirm it shows up in the results box
    Log.Message("TESTCASE: Click a button and confirm it shows up in the results box");
    
    //Click 1 to get it to show up in the results bar
    oneButtonFindByXPath.Click();

    //Check value of resultbox to confirm 1 shows up in there
    var resultBoxFindByXPath = currentPage.Find(["ObjectType", "idStr"], ["Textbox", "results"], 1000);
    var value = aqString.Trim(resultBoxFindByXPath.value);
    
    if(value == "1")
      Log.Checkpoint("Result box had 1 as expected");
    else
      Log.Error("Result box had 1 as expected");        
  }
  catch(e)
  {
    Log.Error("CHECK ADDITIONAL INFO FOR MORE DETAILS: " + e.name, e.description);
  }
  finally
  {
    Sys.Browser("*").Close();
  }
}