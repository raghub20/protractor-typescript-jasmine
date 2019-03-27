
export class StringUtil {
    public static isValidString(text: string): boolean {
        let isValid = true;
        if(text !== undefined && text !== null) {
            isValid = true;
        }
        return isValid;
    }
}