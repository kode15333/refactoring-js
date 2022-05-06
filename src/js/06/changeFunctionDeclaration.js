function circum(radius) {
    return 2 * Math.PI * radius
}

function circumferance(radius) {
    return 2 * Math.PI * radius;
}

{
    class Book {
        addReservation (customer) {
            this.zz_addReservation(customer);
        }

        zz_addReservation (customer) {
            this._reservations.push(customer);
        }
    }

}

class Book {
    addReservation (customer) {
        this.zz_addReservation(customer, false);
    }

    zz_addReservation (customer, isPriority) {
        this._reservations.push(customer);
    }
}
