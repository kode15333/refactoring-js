// 공통 데이터를 중심으로 긴밀하게 엮여 작동하는 함수무리 -> 클래스

const reading = {
    customer: "ivan",
    quantity: 10,
    month: 5,
    year: 2017
};
{
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
    const taxableeCharge = Math.max(0, base - taxThreshold(aReading.year));
}
{
    const baseCharge = calculateBaseCharge(aReading);

    function calculateBaseCharge (aReading) {
        return baseRate(aReading.month, aReading.year) * aReading.quantity;
    }
}

class Reading {
    constructor (data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer () {
        return this._customer;
    }

    get quantity () {return this._quantity;};

    get month () {return this._month;};

    get year () {return this._year;};

    get baseCharge () {
        return baseRate(this._month, this._year) * this._quantity;
    };
    get taxableCharge() {
        return Math.max(0, this._baseCharge - taxThreshold(this._year));
    }
}

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;
