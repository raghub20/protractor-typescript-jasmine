import { ExcelUtil } from './../util/excel-util';
import { RegistrationPage } from './../pages/registration-page';
import { browser } from 'protractor';

let using = require('jasmine-data-provider');
let testDataArray = readTestData();
describe('Registration page test suite', () => {
    beforeEach(async () => {
        await browser.get('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    });

    using(testDataArray, (data) => {
        const registrationPage = new RegistrationPage();
        it(data.testCaseDescription, async () => {
            try {
                await registrationPage.enterFirstName(data.firstName);
                await registrationPage.enterLastName(data.lastName);
                await registrationPage.enterUsername(data.username);
                await registrationPage.enterPassword(data.password);
                await registrationPage.clickOnRegisterButton();
            } catch(error) {
                fail(error);
            }
        });
    });
});



function readTestData() {
    let excelUtil = new ExcelUtil('./e2e/protractor/testdata/TestData.xlsx');
    let data = excelUtil.getTestDataFromSheet('RegistrationPage', './e2e/protractor/mappings/registration-mapping.json');
    return data;
}