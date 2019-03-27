import { BasePage } from './BasePage';
import { IdentifierType } from './../util/test-constants';


const Locators = {
    'firstName_input': {
        'type': IdentifierType.ID,
        'value': 'firstName'
    },
    'lastName_input': {
        'type': IdentifierType.ID,
        'value': 'Text1'
    },
    'username_input': {
        'type': IdentifierType.ID,
        'value': 'username'
    },
    'password_input': {
        'type': IdentifierType.ID,
        'value': 'password'
    },
    'register_button': {
        'type': IdentifierType.PARTIAL_BUTTON_TEXT,
        'value': 'Register'
    }
}


export class RegistrationPage extends BasePage {
    
    public async enterFirstName(firstName: string): Promise<any> {
        return await this.enterText(Locators.firstName_input, firstName);
    }

    public async enterLastName(lastName: string): Promise<any> {
        return await this.enterText(Locators.lastName_input, lastName);
    }

    public async enterUsername(username: string): Promise<any> {
        return await this.enterText(Locators.username_input, username);
    }

    public async enterPassword(password: string): Promise<any> {
        return await this.enterText(Locators.password_input, password);
    }

    public async clickOnRegisterButton(): Promise<any> {
        return await this.clickOnElement(Locators.register_button);
    }
}
