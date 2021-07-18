import {
    Invoice,
    Performace,
    PerformanceType,
    Plays,
    StatementData,
} from "../../data/type";

function createStatementData(invoice: Invoice, plays: Plays): StatementData {
    function playFor({ playID }: PerformanceType) {
        return plays[playID];
    }

    function amountFor(aPerformance: PerformanceType) {
        let result = 0;
        switch (aPerformance.play.type) {
            case "tragedy":
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르 : ${aPerformance.play.type}`);
        }

        return result;
    }

    function volumeCreditsFor(aPerformance: PerformanceType) {
        let result = 0;
        result += Math.max(aPerformance.audience - 30, 0);
        if (aPerformance.play.type === "comedy") {
            result += Math.floor(aPerformance.audience / 5);
        }
        return result;
    }

    function enrichPerformance(aPerformance: Performace): PerformanceType {
        const result: PerformanceType = {
            play: {
                name: "",
                type: "",
            },
            amount: 0,
            volumeCredits: 0,
            ...aPerformance,
        };
        result.play = playFor(result);
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);
        return result;
    }

    function totalAmount(data: StatementData) {
        return data.performances.reduce((total, p) => total + p.amount, 0);
    }

    function totalVolumeCredits(data: StatementData) {
        return data.performances.reduce(
            (total, p) => total + p.volumeCredits,
            0
        );
    }

    const statementData = {
        customer: invoice.customer,
        performances: invoice.performances.map(enrichPerformance),
        totalAmount: 0,
        totalVolumeCredits: 0,
    };

    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);

    return statementData;
}

export default createStatementData;
