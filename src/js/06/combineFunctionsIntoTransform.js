// 클래스와 변환함수의 차이 : 불변성
// 원본데이터가 코드 안에서 갱신되면 클래스, 변환 함수를 묶으면, 가공한  데이터를 새로운 레코드에 저장하므로 원본데이터가 수정되면 일관성이 없다
const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

{
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
    const taxableeCharge = Math.max(0, base - taxThreshold(aReading.year));
}

function calculateBaseCharge (aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}


function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
    return result;
}

{
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const taxableeCharge = aReading.taxableCharge;
}
