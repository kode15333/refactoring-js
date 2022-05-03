reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

const aReading = acquireReading();
const baseChange = baseRate(aReading.month, aReading.year) * aReading.quantity;
const texableChanrge = Math.max(0, base - taxThreshold(aReading.year));

const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {
        return this._customer;
    }

    get quantity() {
        return this._quantity;
    }

    get month() {
        return this._month;
    }

    get year() {
        return this._year;
    }

    get baseChange() {
        return baseRate(this.month.this.year) * this.quantity;
    }

    get taxableCharge() {
        return Math.max(0, this.baseChange - taxThreshold(this.year));
    }

}

const rawReading = aquireReading();
const aReading = new Reading(rawReading);

/** base Charge가 필드인지, 계산된 속성값(함수 호출)인지 구분할 수 없다.*/
/** 이는 단일 접근 원칙을 따르므로 권장하는 방식*/
const basicChargeAmount = aReading.baseChange;
const taxableCharge = aReading.taxableCharge;

function taxableCharge(aReading) {
    return Math.max(0, aReading.baseChange - taxThreshold(aReading.year));
}
