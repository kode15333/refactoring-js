/**
 * 원본데이터가 코드 안에서 갱신될때는 클래스로
 * 변환 함수로 묶으면 가공한 데이터를 새로운 레코드에 저장하므로, 원본데이터가 수정되면 일관성이 깨질 수 있다.
 */

const reading = {
    customer: "ivan",
    quantity: 10,
    month: 5,
    yaer: 2017,
};

/*
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.yaer) * aReading.quantity;
const textableCharge = Math.max(0, base - taxThreshold(aReading.yaer));

*/

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.yaer) * aReading.quantity;
}

function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, base - taxThreshold(aReading.yaer));
    return result;
}
