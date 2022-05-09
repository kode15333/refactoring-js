{
    function disabilityAmount (anEmployee) {
        if (anEmployee.seniority < 2) return 0;
        if (anEmployee.monthsDisabled > 12) return 0;
        if (anEmployee.isPartTime) return 0;
    }
}

function disabilityAmount (anEmployee) {
    if (isNotEligibleForDisablility()) return 0;

    function isNotEligibleForDisablility () {
        return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
    }
}

{
    const foo = () => {
        if (anEmployee.onVacation) {
            if (anEmployee.seniority > 10) {
                return 1;
            }
        }

        return 0.5;
    };

}

const foo = () => {
    if ((anEmployee.onVacation) && (anEmployee.seniority > 10)) {
        return 1;
    }

    return 0.5;

    function isSeniorVacation () {
        return ((anEmployee.onVacation) && (anEmployee.seniority > 10));
    }
};
