import { Locator } from './../util/Locator';
import { ElementFinder, element, by } from 'protractor';
import { IdentifierType } from './../util/test-constants';

export class BasePage {

    private async elementLocator(obj: Locator): Promise<ElementFinder> {
        switch(obj.type) {
            case IdentifierType.ID: {
                return await Promise.resolve(await element(by.id(obj.value)));
            }

            case IdentifierType.PARTIAL_BUTTON_TEXT: {
                return await Promise.resolve(await element(by.partialButtonText(obj.value)));
            }

            default: {
                const errorMsg: string = 'No element found by given ' + IdentifierType[obj.type]+ ', value = ' + obj.value;
                const err = new Error(errorMsg);
                return Promise.reject(err);
            }
        }
    }

    protected async enterText(obj: Locator, text: string): Promise<any> {
        try {
            const ele: ElementFinder = await this.elementLocator(obj);
            return await ele.sendKeys(text);
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    protected async clickOnElement(obj: Locator): Promise<any> {
        try {
            const ele: ElementFinder = await this.elementLocator(obj);
            return await ele.click();
        } catch (error) {
            return await Promise.reject(error);
        }
    }
    
    public isTestSkip(runVal: string): boolean {
        let isRun = false;
        console.log('inside=' + runVal);
        if(runVal.toLowerCase() === 'yes') {
            isRun = true;
        }
        return isRun;
    }
}