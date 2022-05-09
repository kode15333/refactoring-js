class Site {
    get customer () {
        return this._customer === "미확인 고객" ? new UnknownCustomer() : this._customer;
    }
}

class Customer {
    get name () {}

    get billingPlan () {}

    set billingPlan (arg) {}

    get paymentHistory () {}

    get isUnknown () {
        return false;
    }
}

class UnknownCustomer {
    get name () {
        return "거주자";
    }

    get billingPlan () {
        return registry.billingPlans.bacic;
    }

    set billingPlan (arg) {

    }

    get paymentHistory () {
        return new NullPaymentHistory();
    }

    get isUnknown () {
        return false;
    }

    get isUnknown () {
        return true;
    }
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear () {
        return 0;
    }
}

function isUnknown (arg) {
    if (!((arg instanceof Customer) || arg === "미확인 고객")) {
        throw new Error(`잘못된 값과 비교: <${{ arg }}>`);
    }
    return arg.isUnknown;
}

{
    {
        const aCustomer = site.customer;
        const customerName = aCustomer.name;
    }
    {
        const plan = aCustomer.billingPlan;
    }
    {
        aCustomer.billingPlan = newPlan;
    }
    {
        const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
    }
}

function createUnknownCustomer () {
    return {
        isUnknown: true,
        name: "거주자",
        billingPlan: registry.billingPlan.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0
        }

    };
}

function isUnknown (arg) {
    return arg.isUnknown;
}

class Site {
    get customer () {
        return this._customer === "미확인 고객" ? createUnknownCustomer() : this._customer;
    }
}

{
    {
        const customerName = aCustomer.name;
    }
    {
        const plan =  aCustomer.billingPlan;
    }
    {
        const weeksDelinquent =  aCustomer.paymentHistory.weeksDelinquentInLastYear;
    }
}


const rawData = acquireSiteData();
const site = enrichSite(rawData);

function enrichSite(aSite) {
    const result = _.cloneDeep(aSite);
    const unknownCustomer = {
        isUnknown: true,
        name: "거주자",
        billingPlan: registry.billingPlan.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0
        }
    }

    if(isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
}
