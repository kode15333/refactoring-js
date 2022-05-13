{
    class Booking {
        constructor (show, date) {
            this._show = show;
            this._date = date;
        }

        get hashTalkBack () {
            return (this._premiumDelegate) ? this._premiumDelegate.hashTalkBack : this._show.hasOwnProperty("talkBack") && !this.isPeakDay;
        }

        get hasDinner(){
            return (this._premiumDelegate) ?  this._premiumDelegate.hasDinner : undefined
        }

        get basePrice () {
            let result = this._date.price;
            if (this.isPeakDay) result += Math.round(result * 0.15);
            return (this._premiumDelegate) ? this._premiumDelegate.extendBasePrice(result) : result;
        }

        _bePremium (extras) {
            this._premiumDelegate = new PremiumBookingDelegate(this, extras);
        }
    }

    

    function createBooking (show, date) {
        return new Booking(show, date);
    }

    function createPremiumBooking (show, date, extras) {
        const result = new Booking(show, date, extras);
        result._bePremium(extras);
        return result;
    }

    class PremiumBookingDelegate {
        constructor (hostBooking, extras) {
            this._host = hostBooking;
            this.extras = extras;
        }

        get hashTalkBack () {
            return this._host._show.hasOwnProperty("talkBack");
        }

        extendBasePrice (base) {
            return Math.round(base + this._extras.premiumFee);
        }

        get hasDinner () {
            return this._extras.hasOwnProperty("dinner") && !this._host.isPeakDay;
        }
    }

    aBooking = createBooking(show, date);
    aBooking = createPremiumBooking(show, date, extras);

}


