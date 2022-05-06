function circum (radius) {
    return 2 * Math.PI * radius;
}

function circumferance (radius) {
    return 2 * Math.PI * radius;
}

{
    class Book {
        addReservation (customer) {
            this.zz_addReservation(customer);
        }

        zz_addReservation (customer) {
            this._reservations.push(customer);
        }
    }

}

class Book {
    addReservation (customer) {
        this.zz_addReservation(customer, false);
    }

    zz_addReservation (customer, isPriority) {
        this._reservations.push(customer);
    }
}

{
    function isNewEngland (aCustomer) {
        return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
    }

    const newEnglanders = someCustomers.filter(c => isNewEngland(c));
}

{
    function isNewEngland (aCustomer) {
        const stateCode = aCustomer.address.state;
        return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
    }

}

{
    function isNewEngland (aCustomer) {
        return xxNEWinNewEngland(aCustomer.address.state);
    }

    function xxNEWinNewEngland (stateCode) {
        return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
    }


    const newEnglanders = someCustomers.filter(c => xxNEWinNewEngland(aCustomer.address.state));
}

{
    function isNewEngland (stateCode) {
        return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
    }


    const newEnglanders = someCustomers.filter(c => isNewEngland(aCustomer.address.state));
}
