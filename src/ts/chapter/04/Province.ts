import Producer from "./Producer";
import { Doc, ProducerType } from "./type";

class Province {
    private name: string;

    private producers: ProducerType[];

    public totalProduction: number;

    private demand: number;

    private price: number;

    constructor(doc: Doc) {
        this.name = doc.name;
        this.producers = [];
        this.totalProduction = 0;
        this.demand = doc.demand;
        this.price = doc.price;
        doc.producers.forEach(producer => {
            this.addProducer(new Producer(this, producer));
        });
    }

    addProducer(arg: Producer) {
        this.producers.push(arg);
        this.totalProduction += arg.production;
    }

    get shortfall() {
        return this.demand - this.totalProduction;
    }

    get profit() {
        return this.demandValue - this.demandCost;
    }

    get demandValue() {
        return this.satisfiedDemand * this.price;
    }

    get satisfiedDemand() {
        return Math.min(this.demand, this.totalProduction);
    }

    get demandCost() {
        let remainingDemand = this.demand;
        let result = 0;
        this.producers
            .sort((a, b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            });
        return result;
    }
}

export default Province;
