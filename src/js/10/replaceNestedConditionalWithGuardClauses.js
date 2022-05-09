{
    function payAmount (employee) {
        let result;
        if (employee.isSeperate) {
            result = { amount: 0, reasonCode: "SEP" };
        } else {
            if (employee.isRetired) {
                result = { amount: 0, reasonCode: "RET" };
            } else {
                lorem.ipsum(dolor.sitAmet);
                conserctetur(adipiscing).edit();
                sed.do.eismod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
                ut.enim.ad(minum.veniam);
                result = someFinalComputation();
            }
        }
        return result;
    }
}

function payAmount (employee) {
    if (employee.isSeperate) return { amount: 0, reasonCode: "SEP" };
    if (employee.isRetired) return { amount: 0, reasonCode: "RET" };
    lorem.ipsum(dolor.sitAmet);
    conserctetur(adipiscing).edit();
    sed.do.eismod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    ut.enim.ad(minum.veniam);
    return someFinalComputation();
}

{
    function adjustedCapital (anInstrument) {
        let result = 0;
        if (anInstrument.capital > 0) {
            if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
                result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
            }
        }
        return result;
    }
}

function adjustedCapital (anInstrument) {
    if ((anInstrument.capital > 0) ||
        (anInstrument.interestRate <= 0) || (anInstrument.duration <= 0))
        return 0;
    return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}
