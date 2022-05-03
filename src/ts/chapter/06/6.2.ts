export {};

function moreThenFiveLateDeliveries(driver) {
    return driver.numberOfLateDeliveries > 5;
}

function getRating(driver) {
    return moreThenFiveLateDeliveries(driver) ? 2 : 1;
}

function getRating(aDriver) {
    return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

function gatherCustomerDate(out: any[], aCustomer) {
    out.push(["name", aCustomer.name]);
    out.push(["location", aCustomer.location]);
}

function reportLines(aCustomer) {
    const lines = [];
    gatherCustomerDate(lines, aCustomer);
    return lines;
}


function gatherCustomerDate(out: any[], aCustomer) {
    // out.push(["name", aCustomer.name]);
    // out.push(["location", aCustomer.location]);
}

function reportLines(aCustomer) {
    const lines = [];
    out.push(["name", aCustomer.name]);
    out.push(["location", aCustomer.location]);
    gatherCustomerDate(lines, aCustomer);
    return lines;
}
