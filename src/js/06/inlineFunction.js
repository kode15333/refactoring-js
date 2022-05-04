{
    function rating (aDriver) {
        return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
    }

    function moreThanFiveLateDeliveries (aDriver) {
        return aDriver.numberOfLateDeliveries > 5;
    }
}

function rating (aDriver) {
    return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

{
    function reportLine (aCustomer) {
        const lines = [];
        gatherCustomerDate(lines, aCustomer);
        return lines;
    }

    function gatherCustomerDate (out, aCustomer) {
        out.push(["name", aCustomer.name]);
        out.push(["location", aCustomer.location]);
    }
}


function reportLine (aCustomer) {
    const lines = [];
    lines.push(["name", aCustomer.name]);
    lines.push(["location", aCustomer.location]);
    return lines;
}
