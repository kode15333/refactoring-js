{
    function plumages (birds) {
        return new Map(birds.map(b => [b.name, plumage(b)]));
    }

    function speed (birds) {
        return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
    }

    function plumage (bird) {
        switch (bird.type) {
            case "유럽 제비" :
                return "보통이다";
            case "아프리카 제비" :
                return (bird.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";
            case "노르웨이 파랑 앵무" :
                return (bird.voltage > 100) ? "그을렸다" : "예쁘다";
            default:
                return "알 수 없다";
        }
    }

    function airSpeedVelocity (bird) {
        switch (bird.type) {
            case "유럽 제비" :
                return 35;
            case "아프리카 제비" :
                return 40 - 2 * bird.numberOfCoconuts;
            case "노르웨이 파랑 앵무" :
                return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
            default:
                return null;
        }
    }
}

function plumages (birds) {
    return new Map(birds.map(b => createBird(b)).map(b => [b.name, b.plumage]));
}

function speeds (birds) {
    return new Map(birds.map(b => createBird(b)).map(b => [b.name, b.airSpeedVelocity]));
}

class Bird {
    constructor (birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage () {
        return "알 수 없다";
    }

    get airSpeedVelocity () {
        return null;
    }
}

function createBird (bird) {
    switch (this.type) {
        case "유럽 제비" :
            return new EuropeanShallow(bird);
        case "아프리카 제비" :
            return new AfricanSwallow(bird);
        case "노르웨이 파랑 앵무" :
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    }
}

class EuropeanShallow extends Bird {
    get plumage () {
        return "보통이다";
    }

    get airSpeedVelocity () {
        return 35;

    }
}

class AfricanSwallow extends Bird {
    get plumage () {
        return (this.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";
    }

    get airSpeedVelocity () {
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage () {
        return (this.voltage > 100) ? "그을렸다" : "예쁘다";
    }

    get airSpeedVelocity () {
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
    }
}

function rating (voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRick(voyage, history);
    if (vpf * 3 > (vr + chr * 2)) return "A"; else return "B";
}

function voyageRisk (voyage) {
    let result = 1;
    if (voyage.length > 4) result += 2;
    if (voyage.length > 8) result += voyage.length - 8;
    if (["중국", "동인도"].includes(voyage.zone)) result += 4;
    return Math.max(result, 0);
}

function captainHistoryRick (voyage, history) {
    let result = 1;
    if (history.length < 5) result += 4;
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === "중국" && hasChina(history)) result -= 2;
    return Math.max(result, 0);
}

function hasChina (history) {
    return history.some(v => "중국" === v.zone);
}

function voyageProfitFactor (voyage, history) {
    let result = 2;
    if (voyage.zone === "중국") result += 1;
    if (voyage.zone === "동인도") result += 1;
    if (voyage.zone === "중국" && hasChina(history)) {
        result += 3;
        if (history.length > 10) result += 1;
        if (voyage.length > 12) result += 1;
        if (voyage.length > 18) result -= 1;
    } else {
        if (history.length > 8) result += 1;
        if (voyage.length > 14) result -= 1;
    }

    return result;
}

const voyage = { zone: "서인도", length: 10 };
const history = [{ zone: "동인도", length: 5 }, {
    zone: "서인도", length: 15
}, { zone: "중국", length: -2 }, { zone: "서아프리카", length: 7 }];

const myRating = rating(voyage, history);

{

    function rating (voyage, history) {
        return createRating(voyage, history).value;
    }

    class Rating {
        constructor (voyage, history) {
            this.voyage = voyage;
            this.history = history;
        }

        get value () {
            const vpf = this.voyageProfitFactor;
            const vr = this.voyageRisk;
            const chr = this.captainHistoryRick;
            if (vpf * 3 > (vr + chr * 2)) return "A"; else return "B";
        }

        get voyageRisk () {
            let result = 1;
            if (this.voyage.length > 4) result += 2;
            if (this.voyage.length > 8) result += this.voyage.length - 8;
            if (["중국", "동인도"].includes(this.voyage.zone)) result += 4;
            return Math.max(result, 0);
        }

        get captainHistoryRick () {
            let result = 1;
            if (this.history.length < 5) result += 4;
            result += this.history.filter(v => v.profit < 0).length;
            return Math.max(result, 0);
        }

        get voyageProfitFactor () {
            let result = 2;
            if (this.voyage.zone === "중국") result += 1;
            if (this.voyage.zone === "동인도") result += 1;
            result += this.historyLengthFactor;
            result += this.voyageLengthFactor;
            return result;
        }

        get voyageLengthFactor () {
            return (this.voyage.length > 14) ? -1 : 0
        }

        get historyLengthFactor () {
            return (this.history.length > 8) ? 1 : 0;
        }

        get hasChina () {
            return this.history.some(v => "중국" === v.zone);
        }
    }

    class ExperiencedChinaRating extends Rating {
        get captainHistoryRick () {
            const result = super.captainHistoryRick - 2;
            return Math.max(result, 0);
        }



        get voyageLengthFactor () {
            let result = 0;
            if (this.voyage.length > 12) result += 1;
            if (this.voyage.length > 18) result -= 1;

            return result;
        }

        get historyLengthFactor () {
            return (this.history.length > 10) ? 1 : 0;
        }


        get voyageProfitFactor () {
            return super.voyageProfitFactor + 3;
        }

    }

    function createRating (voyage, history) {
        if (voyage.zone === "중국" && history.some(v => "중국" === v.zone)) {
            return new ExperiencedChinaRating(voyage, history);
        } else return new Rating(voyage, history);
    }
}
