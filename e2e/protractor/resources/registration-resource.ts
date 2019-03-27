import { BaseResource } from './base-resource';


export class RegistrationResource extends BaseResource {
    private firstName: string = null;
    private lastName: string = null;
    private username: string = null;
    private password: string = null;

    public setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    public setLastName(lastName: string) {
        this.lastName = lastName;
    }

    public setUsername(username: string) {
        this.username = username;
    }

    public setPassword(password: string) {
        this.password = password;
    }

    public getFirstName(): string {
        return this.firstName;
    }
}