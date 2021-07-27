// before
const { basePrice } = anOrder;
return basePrice > 1000;

// after
return anOrder.basePrice > 1000;
