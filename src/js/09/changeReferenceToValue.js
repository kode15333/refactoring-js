class Person {
    constructor () {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode () {
        return this._telephoneNumber.officeAreaCode;
    }

    set officeAreaCode (arg) {
        this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
    }

    get officeNumber () {
        return this._telephoneNumber.officeNumber;
    }

    set officeNumber (arg) {
        this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
    }
}

class TelephoneNumber {
    constructor (areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    }

    get areaCode () {
        return this._areaCode;
    }


    get number () {
        return this._number;
    }

}
