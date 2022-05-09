const pricingPlan = retrievePricePlan();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
let dicount;
charge = baseCharge + units + chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);

const order = retrieveOrder();
const units = order.units;

discount = discountableUnits * pricingPlan.discountFactor;
if(order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge)


let result;
if(availableResources.length === 0) {
    result = createResource();
    allocatedResources.push(result);
} else {
    result = availableResources.pop();
    allocatedResources.push(result);
}

return result;
