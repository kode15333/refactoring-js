{
    function tenPercentRaise (aPerson) {
        aPerson.salary = aPerson.salary.multiply(1.1)
    }

    function fivePercentRaise (aPerson) {
        aPerson.salary = aPerson.salary.multiply(1.05)
    }
}

function raise(aPerson, factor) {
    aPerson.salary = aPerson.salary.multiply(1 * factor)
}

{
    function baseCharge(usage) {
        if(usage < 0) return usd(0);
        const amount =
            bottomBand(usage) * 0.03
            + middleBand(usage) * 0.05
            + topBand(usage) * 0.07

        return usd(amount)
    }

    function bottomBand(usage) {
        return Math.min(usage, 100);
    }

    function middleBand(usage) {
        return usage > 100 ? Math.min(usage, 100) - 100 : 0;
    }

    function topBand(usage) {
        return usage > 100 ? usage - 200 : 0;
    }
}

function baseCharge(usage) {
    if(usage < 0) return usd(0);
    const amount =
        withBand(usage, 100, 0) * 0.03
        + withBand(usage, 100, 200) * 0.05
        + withBand(usage,200, Infinity) * 0.07

    return usd(amount)
}




function withBand(usage, bottom, top) {
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
}
