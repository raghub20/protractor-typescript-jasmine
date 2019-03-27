// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const protractor = require('protractor');
const PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
const { AutomationExecutionReport } = require('./dist/out-tsc/e2e/protractor/reports/automation-execution-report.js');
const { TestSuiteResult } = require('./dist/out-tsc/e2e/protractor/reports/test-suite-result.js');
const { TestcaseResult } = require('./dist/out-tsc/e2e/protractor/reports/testcase-result.js');
var automationExecutionReport = AutomationExecutionReport.getAutomationExecutionReportObj();
var testSuiteResultObj, testcaseResultObj;
var path = require('path');
const prettyReporter = new PrettyReporter({
    path: path.join(__dirname, 'results'),
    screenshotOnPassed: true
});
const fs = require('fs');

exports.config = {
    // This will destroy and creates the new browser object for each test.
    //restartBrowserBetweenTests: true,
    capabilities: {
        'browserName': 'chrome'
    },
    suites: {
        regressionSuite: './dist/out-tsc/e2e/protractor/regression-suite/reg*.js'
    },
    /*
    * It will connect to locally installed browser. First preference will be chrome and next is
    * firefox. In order to use this configuration either of these browsers must be installed in 
    * script running machine.
    */
    directConnect: true,
    //seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.12.0.jar',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1200000
    },
    onPrepare() { 
        jasmine.getEnv().addReporter(myReporter);
        jasmine.getEnv().addReporter(prettyReporter);
        protractor.browser.manage().window().maximize();
        protractor.browser.manage().timeouts().implicitlyWait(10000);
        protractor.browser.getCapabilities().then((cap) => {
            automationExecutionReport.setBrowserName(cap.get("browserName"));
        });
    },
    /* if using isSharded option see below */
    beforeLaunch() {
        prettyReporter.startReporter();
    }
}

const myReporter = {
    suiteStarted : (result) => {
        testSuiteResultObj = new TestSuiteResult();
    },
    suiteDone : (result) => {
        automationExecutionReport.pushTestSuiteResultToReport(testSuiteResultObj);
    },
    specStarted : (result) => {
        testcaseResultObj = new TestcaseResult();
    },
    specDone : (result) => {
        testcaseResultObj.testcaseName = result.description;
        testcaseResultObj.status = result.status;
        testSuiteResultObj.pushTestcaseResult(testcaseResultObj);
    },
    jasmineDone : () => {
        console.log(JSON.stringify(AutomationExecutionReport.getAutomationExecutionReportObj()));
        let obj = AutomationExecutionReport.getAutomationExecutionReportObj();
        obj.setHtmlReportLoc('./results/report.html');
        let testResultsData = JSON.stringify(AutomationExecutionReport.getAutomationExecutionReportObj());
        fs.writeFileSync('./results/TestResults.json', testResultsData);
    }
}