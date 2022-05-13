{
    class Booking {
        constructor (show, date) {
            this._show = show;
            this._date = date;
        }

        get hashTalkBack () {
            return (this._premiumDelegate) ? this._premiumDelegate.hashTalkBack : this._show.hasOwnProperty("talkBack") && !this.isPeakDay;
        }

        get hasDinner () {
            return (this._premiumDelegate) ? this._premiumDelegate.hasDinner : undefined;
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

function createBird (data) {
    return new Bird(data)
}

class Bird {
    constructor (data) {
        this._name = data.name;
        this._plumage = data.plumage;
        this._speciesDelegate = this.selectSpeciesDelegate(data);
    }

    get name () {
        return this._name;
    }

    get plumage () {
        return this._speciesDelegate.plumage;
    }

    get airSpeedVelocity () {
        return this._speciesDelegate.airSpeedVelocity
    }

    selectSpeciesDelegate (data) {
        switch (data.type) {
            case "유럽 제비" :
                return new EuropeanShallowDelegate(data, this);
            case "아프리카 제비" :
                return new AfricanSwallowDelegate(data, this);
            case "노르웨이 파랑 앵무" :
                return new NorwegianBlueParrotDelegate(data, this);
            default :
                return new SpeciesDelegate(data, this);
        }
    }
}

class SpeciesDelegate {
    constructor (data, bird) {
        this._bird = bird;
    }

    get plumage () {
        return this._bird._plumage || "보통이다";
    }

    get airSpeedVelocity () {
        return null;
    }

}

class EuropeanShallowDelegate extends SpeciesDelegate {

    get airSpeedVelocity () {
        return 35;
    }
}

class AfricanSwallowDelegate extends SpeciesDelegate {
    constructor (data, bird) {
        super(data, bird);
        this._numberOfCoconuts = data.numberOfCoconuts;
    }

    get airSpeedVelocity () {
        return 40 - 2 * this._numberOfCoconuts;
    }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
    constructor (data, bird) {
        super(data, bird);
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }

    get plumage () {
        if (this._voltage > 100) return "그을렸다";
        else return this._bird._plumage || "예쁘다";
    }

    get airSpeedVelocity () {
        return (this._isNailed) ? 0 : 10 + this._voltage / 10;
    }

}
