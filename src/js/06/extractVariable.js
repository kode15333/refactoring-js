{
    function price (order) {
        // 가격(price) = 기본가격 - 수량할인 + 배송비
        return order.quantity * order.itemPrice -
            Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
            Math.min(order.quantity * order.itemPrice * 0.1, 100);
    }
}

function price (order) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping;
}

{
    class Order {
        constructor (aRecord) {
            this._data = aRecord;
        }

        get quantity () {
            return this._data.quantity;
        }

        get itemPrice () {
            return this._data.itemPrice;
        }

        get price () {
            return this.quantity * this.itemPrice -
                Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
                Math.min(this.quantity * this.itemPrice * 0.1, 100);
        }
    }
}

class Order {
    constructor (aRecord) {
        this._data = aRecord;
    }

    get quantity () {
        return this._data.quantity;
    }

    get itemPrice () {
        return this._data.itemPrice;
    }

    get price () {
        return this.basePrice - this.quantityDiscount + this.shipping;
    }

    get basePrice () {
        return this.quantity + this.itemPrice;
    }

    get quantityDiscount () {
        return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    }

    get shipping () {
        return Math.min(this.quantity * this.itemPrice * 0.1, 100);
    }
}


