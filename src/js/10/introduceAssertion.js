import * as assert from "assert";

class Customer {
    applyDiscount (aNumber) {
        return this.discountRate ?
            aNumber - (this.discountRate * aNumber) : aNumber;
    }
}

{
    class Customer {
        applyDiscount (aNumber) {
            if (!this.discountRate) return aNumber;
            else {
                assert(this.discountRate >= 0);
                return aNumber - (this.discountRate * aNumber);

            }
        }

        set discountRate(aNumber) {
            assert(null === aNumber || aNumber >= 0);
            this._discountRate = aNumber;
        }
    }

}
