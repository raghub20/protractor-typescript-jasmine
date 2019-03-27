import { TestcaseResult } from "./test-case-result";

export class TestSuiteResult {
  public testSuiteName: string;
  public testcaseResultsList: Array<TestcaseResult> = new Array();

  public pushTestcaseResult(testcaseResult : TestcaseResult) {
    this.testcaseResultsList.push(testcaseResult);
  }
}