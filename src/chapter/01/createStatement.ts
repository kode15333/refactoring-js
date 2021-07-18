import {
    Invoice,
    Performace,
    PerformanceType,
    Play,
    Plays,
    StatementData,
} from "../../data/type";

class PerformanceCalculator {
    constructor(public performance: Performace, public play: Play) {
        this.performance = performance;
        this.play = play;
    }

    public get amount(): number {
        throw new Error("override");
    }

    public get volumeCredits(): number {
        return Math.max(this.performance.audience - 30, 0);
    }
}

class TragedyPerformanceCalculator extends PerformanceCalculator {
    get amount() {
        let result = 40000;
        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30);
        }
        return result;
    }
}
class ComedyPerformanceCalculator extends PerformanceCalculator {
    constructor(performance: Performace, play: Play) {
        super(performance, play);
    }

    get amount() {
        let result = 30000;
        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20);
        }

        result += 300 * this.performance.audience;
        return result;
    }

    public get volumeCredits(): number {
        super.volumeCredits;
        return (
            Math.max(this.performance.audience - 30, 0) +
            Math.floor(this.performance.audience / 5)
        );
    }
}
function createStatementData(invoice: Invoice, plays: Plays): StatementData {
    function playFor({ playID }: Performace) {
        return plays[playID];
    }

    function createPerformanceCalculator(performance: Performace, play: Play) {
        switch (play.type) {
            case "tragedy":
                return new TragedyPerformanceCalculator(performance, play);
            case "comedy":
                return new ComedyPerformanceCalculator(performance, play);
            default:
                throw new Error(`알 수 없는 장르 ${play.type}`);
        }
    }

    function enrichPerformance(aPerformance: Performace): PerformanceType {
        const calculator = createPerformanceCalculator(
            aPerformance,
            playFor(aPerformance)
        );
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
        result.amount = calculator.amount;
        result.volumeCredits = calculator.volumeCredits;
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
