import { AutomationExecutionReport } from './../reports/automation-execution-report';
import { browser, element, by, protractor } from 'protractor';


describe("Suite1", () => {
  it('Testcase01', async () => {
    await browser.get('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    await browser.sleep(5000);
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element(by.id('firstName'))), 5000).then(() => {
      console.log("element is clickable");
    }).catch((error) => {
      
    })
    //element(by.partialButtonText('Register'));
  });
});