function trackSummary (points) {
    const totalTime = calculateTime();
    const pace = totalTime / 60 / totalDistance(points);

    return {
        time: totalTime,
        distance: totalDistance(points),
        pace: pace
    };

    function calculateTime () {}
}

function totalDistance (points) {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        result += distance(points[i - 1], points[i]);
    }
    return result;

}

function distance (p1, p2) {
    const EARTH_RADIUS = 3959;
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat / 2), 2)
        + Math.cos(radians(p2.lat))
        * Math.cos(radians(p1.lat))
        * Math.pow(Math.sin(dLat / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
}

function radians (degrees) {
    return degrees * Math.PI / 180;
}

class Account {
    get bankCharge () {
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result;
    }

    get overdraftCharge () {
       return this.type.overdraftCharge(this.daysOverdrawn);
    }
}

class AccountType {
    overdraftCharge (daysOverdrawn) {
        if (this.isPremium) {
            const baseCharge = 10;
            if (daysOverdrawn <= 7) {
                return baseCharge;
            } else {
                return baseCharge + (daysOverdrawn - 7) * 0.85;
            }
        } else {
            return daysOverdrawn * 1.75;
        }
    }
}

{
    //if 계좌정보가 더 많이 필요했다면, 계좌자체를 넘겨주면 된다 like this
    class Account {
        get bankCharge () {
            let result = 4.5;
            if (this._daysOverdrawn > 0) result += this.overdraftCharge;
            return result;
        }

        get overdraftCharge () {
            return this.type.overdraftCharge(this);
        }
    }

    class AccountType {
        overdraftCharge (account) {
            if (this.isPremium) {
                const baseCharge = 10;
                if (account.daysOverdrawn <= 7) {
                    return baseCharge;
                } else {
                    return baseCharge + (account.daysOverdrawn - 7) * 0.85;
                }
            } else {
                return account.daysOverdrawn * 1.75;
            }
        }
    }
}
