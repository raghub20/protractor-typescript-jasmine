import { BaseResource } from './../resources/base-resource';
import { RegistrationResource } from './../resources/registration-resource';

export class ObjectRepository {
    public static getResourceObject(objectName: string): any {
        if (objectName === 'RegistrationResource') {
            return new RegistrationResource();
        }
    }

    /**
     * This method will return the local variables list of given object
     * @param instance
     */
    public static getPropertiesOfObject(instance: Object): string[] {
        let props: string[] = new Array();
        if(instance !== undefined && instance !== null ) {
            props = Object.getOwnPropertyNames(instance);
        }
        return props;
    }

    public static initializeNullWithEmptyString(instance: Object): Object {
        if(instance !== undefined && instance !== null) {
            let props: string[] = this.getPropertiesOfObject(instance);
            for(let prop of props) {
                if(instance[prop] == null || instance[prop] == undefined) {
                    instance[prop] = '';
                }
            }
        }
        return instance;
    }
}