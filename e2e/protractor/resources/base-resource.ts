

export class BaseResource {
    runMode: string = null;
    expectedResult: string = null;
    testCaseDescription: string = null;

    public setRunMode(runMode: string) {
        this.runMode = runMode;
    }

    public setExpectedResult(expectedResult: string) {
        this.expectedResult = expectedResult;
    }

    public setTestCaseDescription(testCaseDescription: string) {
        this.testCaseDescription = testCaseDescription;
    }

    public getRunMode(): string {
        return this.runMode;
    }

    public getExpectedResult(): string {
        return this.expectedResult;
    }
}