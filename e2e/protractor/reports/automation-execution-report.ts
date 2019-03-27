import { start } from "repl";
import { TestcaseResult } from "./test-case-result";
import { TestSuiteResult } from "./test-suite-result";

export class AutomationExecutionReport {
  private static automationExecutionReport: AutomationExecutionReport;
  private browserName: string;
  private startTime;
  private endTime;
  private htmlReportLoc: string;

  public testSuiteResultsList: Array<TestSuiteResult> = new Array();
  
  public static getAutomationExecutionReportObj(): AutomationExecutionReport {
    if(AutomationExecutionReport.automationExecutionReport == null) {
      AutomationExecutionReport.automationExecutionReport = new AutomationExecutionReport();
    }
    return AutomationExecutionReport.automationExecutionReport;
  }

  public pushTestSuiteResultToReport(testSuiteResult: TestSuiteResult) {
    this.testSuiteResultsList.push(testSuiteResult);
  }

  public setBrowserName(browserName: string) {
    this.browserName = browserName;
  }

  public getBrowserName(): string {
    return this.browserName;
  }

  public setStartTime(startTime: any) {
    this.startTime = startTime;
  }

  public getStartTime(): string {
    return this.startTime;
  }

  public setEndTime(endTime: any) {
    this.endTime = endTime;
  }

  public getEndTime() {
    return this.endTime;
  }
  
  public setHtmlReportLoc(loc: string) {
    this.htmlReportLoc = loc;
  }

  public getHtmlReportLoc() {
    return this.htmlReportLoc;
  }
}