class Person {
    constructor () {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeNumber () {
        return this._telephoneNumber.number;
    }

    set officeNumber (value) {
        this._telephoneNumber.number = value;
    }

    get officeAreaCode () {
        return this._telephoneNumber.areaCode;
    }

    set officeAreaCode (value) {
        this._telephoneNumber.areaCode = value;
    }

    get telephoneNumber () {
        return this._telephoneNumber.toString();
    }

    get name () {
        return this._name;
    }

    set name (value) {
        this._name = value;
    }
}

class TelephoneNumber {
    get areaCode () {
        return this._officeAreaCode;
    }

    set areaCode (value) {
        this._officeAreaCode = value;
    }

    get number () {
        return this._officeNumber;
    }

    set number (value) {
        this._officeNumber = value;
    }

    toString () {
        return `(${this.areaCode}) ${this.number}`;

    }

}
