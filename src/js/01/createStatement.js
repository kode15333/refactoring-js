class PerformanceCalculator{
    constructor (aPerformance, aPlay) {
        this.performancee = aPerformance;
        this.play = aPlay;
    }
}


export default function createStatementData (invoice, plays) {
    const result = {};
    result.customer = invoice.customer;
    result.performances = invoice.performances.map(entirePerformance);
    result.totalAmount = totalAmount(result);
    result.totalVolumeCredits = totalVolumeCredits(result)
    return result


    function entirePerformance(aPerformance) {
        const calculator = new PerformanceCalculator(aPerformance, playFor(aPerformance));
        const result = Object.assign({}, aPerformance);
        result.play = playFor(result);
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditFor(result)
        return result;
    }
    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }
    function amountFor(aPerformance) {
        let result = 0;
        switch (aPerformance.play.type) {
            case 'tragedy' :
                result = 40000;
                if(aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30)
                }
                break;
            case 'comedy' :
                result = 30000;
                if(aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르 : ${aPerformance.play.type}`)
        }

        return result
    }
    function volumeCreditFor(aPerformance) {
        let volumeCredits = 0;
        volumeCredits += Math.max(aPerformance.audience - 30, 0);
        if("comedy" === aPerformance.play.type) volumeCredits += Math.floor(aPerformance.audience / 5)

        return volumeCredits

    }
    function totalAmount(data) {
        return data.performances.reduce((total, p) => total + p.amount, 0)
    }
    function totalVolumeCredits (data) {
        return data.performances.reduce((total, p) => total + p.volumeCredits, 0)
    }

}
