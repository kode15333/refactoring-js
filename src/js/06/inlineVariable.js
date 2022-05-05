{
    const foo = (anOrder) => {
        let basePrice = anOrder.basePrice;
        return basePrice > 1000;
    };
}

const foo = (anOrder) => {
    return anOrder.basePrice > 1000
};
