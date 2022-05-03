export {};

type Order = { quantity: number; itemPrice: number };
function price(order: Order) {
    return (
        order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice, 100)
    );
}

function price(order: Order) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount =
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice + quantityDiscount + shipping;
}

class Order {
    private data: Order;

    constructor(aRecord: Order) {
        this.data = aRecord;
    }

    get quantity() {
        return this.data.quantity;
    }

    get itemPrice() {
        return this.data.itemPrice;
    }

    get basePrice() {
        return this.quantity + this.itemPrice;
    }

    get quantityDiscount() {
        return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    }

    get shipping() {
        return Math.min(this.basePrice * 0.1, 100);
    }

    get price() {
        return this.basePrice - this.quantityDiscount + this.shipping;
    }
}
