const organization = {
    name: "애크미 구스베리",
    count: "GB"
};

result += `<h1>${organization.name}</h1>`;
organization.name == newName;

function getRawDateOfOrganization () {return organization;};

{
    result += `<h1>${getRawDateOfOrganization().name}</h1>`;
    getRawDateOfOrganization().name == newName;
}

{
    class Organiztion {
        get country () {
            return this._country;
        }

        set country (value) {
            this._country = value;
        }

        get name () {
            return this._name;
        }

        set name (value) {
            this._name = value;
        }

        constructor (data) {
            this._name = data.name;
            this._country = data.country;
        }

    }

    const organization = new Organiztion({
        name: "애크미 구스베리",
        count: "GB"
    });

    function getRawDateOfOrganization () {
        return organization.name;
    }

    function getOrganization () {
        return organization;
    }
}

let customerData = {};

customerData[customerID].usages[year][month] = amount;

function compareUsage (customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
}

function getRawDateOfCustomer () {return customerData;};

function setRawDataOfCustomers (arg) {customerData = arg;};

{
    function compareUsage (customerID, laterYear, month) {
        const later = getRawDateOfCustomer()[customerID].usages[laterYear][month];
        const earlier = getRawDateOfCustomer()[customerID].usages[laterYear - 1][month];
        return { laterAmount: later, change: later - earlier };
    }
}

{
    class CustomerData {
        constructor (data) {
            this._data = data;
        }

        setUsage(customerID, year, month, amount){
            this._data[customerID].usages[year][month] = amount;
        }

        usage(customerID, year, month) {
            return this._data[customerID].usages[year][month]
        }

        get rawData() {return _.cloneDeep(this._data)}
    }

    function setRawDataOfCustomers (arg) {customerData = new CustomerData(arg);};

    function getRawDateOfCustomer () {return customerData.rawData;};

    function getCustomerDate () {return customerData;}

    function setUsage(customerID, year, month, amount){
        customerData[customerID].usages[year][month] = amount;
    }

    function compareUsage (customerID, laterYear, month) {
        const later = getRawDateOfCustomer().usages(customerID, laterYear, month)
        const earlier = getRawDateOfCustomer().usages(customerID, laterYear - 1, month)
        return { laterAmount: later, change: later - earlier };
    }




}
