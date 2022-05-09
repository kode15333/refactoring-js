{const organization = { name: "애크미 구스베리", country: "GB" };}

class Organiztion {
    constructor (data) {
        this._title = data.name;
        this._country = data.country;
    }

    get title () {
        return this._title;
    }

    set title (aString) {
        this._title = aString;
    }

    get country () {
        return this._country;
    }

    set country (aCountryCode) {
        this._country = aCountryCode;
    }

}


const organization = new Organiztion({ name: "애크미 구스베리", country: "GB" })
