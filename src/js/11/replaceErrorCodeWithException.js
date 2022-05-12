const status = calculateShippingCosts(orderData);
if (status < 0) errorList.push({ order: orderData, errorCode: status });

function localShippingRules (country) {
    const data = countryData.shippingRules[country];
    if (data) return new ShippingRules(data);
    else return -23;
}

{

    class OrderProcessingError extends Error {
        constructor (errorCode) {
            super(`주문 처리 오류 ${errorCode}`);
            this.code = errorCode;
        }

        get name () {
            return "OrderProcessingError";
        }
    }

    function localShippingRules (country) {
        const data = countryData.shippingRules[country];
        if (data) return new ShippingRules(data);
    }

    try {
        calculateShippingCosts(orderData);
    } catch (e) {
        if(e instanceof OrderProcessingError)
            errorList.push({ order: orderData, errorCode: e.code });
        else throw e;
    }

}
