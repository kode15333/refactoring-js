
class Shipment {
    get trackingInfo(){
        return `${this.shippingCompany}: ${this.trackingNumber}`
    }

    get trackingNumber () {
        return this._trackingNumber;
    }

    set trackingNumber (value) {
        this._trackingNumber = value;
    }

    set shippingCompany(arg) {
        this._shippingComany = arg;
    }

    get shippingCompany () {
        return this._shippingComany;
    }
}
