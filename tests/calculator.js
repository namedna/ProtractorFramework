let homepage = require("../pages/homepage");

describe("Demo Calculator Tests", function () {
  it("Additon test", function () {
    //browser.get("https://juliemr.github.io/protractor-demo/");
    homepage.get("https://juliemr.github.io/protractor-demo/");

    //element(by.model("first")).sendKeys("23");
    homepage.enterFirstNumber("223");

    //element(by.model("second")).sendKeys("11");
    homepage.enterSecondNumber("11");

    //element(by.css('[ng-click="doAddition()"]')).click();
    homepage.goButton();

    /* let result = element(by.cssContainingText(".ng-binding", "34"));
    expect(result.getText()).toEqual("34"); */
    homepage.verifyResult("234");

    browser.sleep(3000);
  });
});
