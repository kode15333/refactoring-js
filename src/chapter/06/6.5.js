import * as assert from "assert";

function circum(radius) {
    return 2 * Math.PI * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

function circum(radius) {
    return circumference(radius);
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

class Book {
    addReservation(customer) {
        this.zz_addReservation(customer, false);
    }

    zz_addReservation(customer, isPriorty) {
        assert(isPriorty === true || isPriorty === false);
        this._reservations.push(customer);
    }
}

// function inNewEngland(aCustomer) {
//     return xxNEWinNewEngland(aCustomer.address.state);
// }

function inNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state));

export {};
