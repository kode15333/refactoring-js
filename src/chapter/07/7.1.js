export {};
// before
const organization = {
    name: "애크미 구스베리",
    count: "GB",
};

// after
class Organiztion {
    constructor({ country, name }) {
        this._name = name;
        this._country = country;
    }

    get name() {
        return this._name;
    }

    set name(aString) {
        this._name = aString;
    }

    get country() {
        return this._country;
    }

    set country(aCountry) {
        this._country = aCountry;
    }
}

let result = "";
result = `<h1>${organization.name}</h1>`;
organization.name = newName;

function getRawDataOfOrganization() {
    return organization;
}

result = `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = newName;

let customerData = {};

customerData[customerID].usage[year][momth] = amount;

function compareUsage(customerID, laterYear, momth) {
    const later = customerData[customerID].usages[laterYear][momth];
    const ealier = customerData[customerID].usages[laterYear - 1][momth];
    return { laterAmount: later, change: later - ealier };
}

function getRawDataOfCustomers() {
    return customerData;
}

function setRawDataOfCUstomers(arg) {
    customerData = arg;
}

getRawDataOfCustomers()[customerID].usage[year][momth] = amount;

function compareUsage(customerID, laterYear, momth) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][momth];
    const ealier =
        getRawDataOfCustomers()[customerID].usages[laterYear - 1][momth];
    return { laterAmount: later, change: later - ealier };
}

class CustomerData {
    constructor(data) {
        this._data = data;
    }

    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }

    get rawData() {
        return _.cloneDeep(this._data);
    }

    usage(customerID, year, month) {
        return this._data[customerID].usage[year][month];
    }
}
