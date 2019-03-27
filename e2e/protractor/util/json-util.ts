import { browser } from 'protractor';
import { readFile } from 'xlsx';
import { readFileSync } from 'fs';


export class JsonUtil {

    static fs = require('fs');

    public static getKeyFromValue(jsonObject: any, value: string): string {
        let property: string;
        if(jsonObject !== undefined && jsonObject !== null) {
            let keys:string[] = Object.keys(jsonObject);
            for(let key of keys) {
                let mappingVal: string = jsonObject[key];
                if(mappingVal.toLocaleLowerCase() === value.toLocaleLowerCase()) {
                    property = key;
                }
            }
        }
        return property;
    }

    public static getKeysFromJson(jsonObject: any): string[] {
        let keys: string[] = new Array();
        keys = Object.keys(jsonObject);
        return keys;
    }

    public static convertJsonFileToJsonObject(filePath: string): JSON {
        let data: string = readFileSync(filePath, 'UTF-8');
        return JSON.parse(data);
    }
 }