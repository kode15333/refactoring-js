class PerformanceCalculator {
    constructor (aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount () {
        throw new Error(`서브 클래스에서 처리`);
    }

    get volumeCredits () {
        let volumeCredits = 0;
        volumeCredits += Math.max(this.performance.audience - 30, 0);
        if ("comedy" === this.play.type) volumeCredits += Math.floor(this.performance.audience / 5);

        return volumeCredits;
    }
}

class TragedyCalculator extends PerformanceCalculator {
    constructor (aPerformance, aPlay) {
        super(aPerformance, aPlay);
    }

    get amount () {
        let result = 40000;
        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30);
        }
        return result;
    }

}

class ComedyCalculator extends PerformanceCalculator {
    constructor (aPerformance, aPlay) {
        super(aPerformance, aPlay);
    }

    get amount(){
        let result = 30000;
        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        return result;

    }

}

function createPerformanceCalculator (aPerformance, aPlay) {
    switch (aPlay.type) {
        case "tragedy":
            return new TragedyCalculator(aPerformance, aPlay);
        case "comedy":
            return new ComedyCalculator(aPerformance, aPlay);
        default:
            throw new Error(`알 수 없는 장르 : ${aPlay.type}`);
    }
}

export default function createStatementData (invoice, plays) {
    const result = {};
    result.customer = invoice.customer;
    result.performances = invoice.performances.map(entirePerformance);
    result.totalAmount = totalAmount(result);
    result.totalVolumeCredits = totalVolumeCredits(result);
    return result;

    function entirePerformance (aPerformance) {
        const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
        const result = Object.assign({}, aPerformance);
        result.play = calculator.play;
        result.amount = calculator.amount;
        result.volumeCredits = calculator.volumeCredits;
        return result;
    }

    function playFor (aPerformance) {
        return plays[aPerformance.playID];
    }

    function totalAmount (data) {
        return data.performances.reduce((total, p) => total + p.amount, 0);
    }

    function totalVolumeCredits (data) {
        return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
    }

}
