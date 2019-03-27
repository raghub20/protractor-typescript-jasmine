import { ObjectRepository } from './object-repository';
import { JsonUtil } from './json-util';
import { WorkSheet, utils, WorkBook, readFile } from 'xlsx';


export class ExcelUtil {

    private workBook: WorkBook;
    constructor(path: string) {
        if(path != undefined && path.length > 0) {
            this.workBook = readFile(path);
        }
    }
    public async getKeys(jsonObj): Promise<string[]> {
        let keys:string[] = new Array();
        if (jsonObj != undefined) {
            keys = Object.keys(jsonObj);
        } else {
            return await Promise.reject('json object is undefined');
        }
        return await Promise.resolve(keys);
    }


    /**
     * This function will take the targeted sheet name, mapping file name as an input parameters
     * and returns the test data objects in a array.
     * @param sheetName: string
     */
    public getTestDataFromSheet(sheetName: string, mappingFilename: string) {
        let data: Object[] = new Array();
        if(sheetName != undefined) {
            let sheet: WorkSheet = this.workBook.Sheets[sheetName];
            let excelDataInJsonArray = utils.sheet_to_json(sheet);
            let mappingJson = JsonUtil.convertJsonFileToJsonObject(mappingFilename);
            let targetedObj = ObjectRepository.getResourceObject(mappingJson['objectToCreate']);
            let targetedObjProperties:string[] = ObjectRepository.getPropertiesOfObject(targetedObj);
            for(let row of excelDataInJsonArray) {
                let targetedObj = ObjectRepository.getResourceObject(mappingJson['objectToCreate']);
                let excelJsonKeys = JsonUtil.getKeysFromJson(row);
                for(let excelKey of excelJsonKeys) {
                    let varName = JsonUtil.getKeyFromValue(mappingJson, excelKey);
                    if(targetedObjProperties.indexOf(varName) >= 0 ) {
                        let rowVal = row[excelKey];
                        if(rowVal == null || rowVal == undefined) {
                            rowVal = '';
                        }
                        Reflect.set(targetedObj, varName, rowVal);
                    }
                }
                targetedObj = ObjectRepository.initializeNullWithEmptyString(targetedObj);
                data.push(targetedObj);
            }
        }
        return data;
    } 
}