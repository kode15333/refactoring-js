import Producer from "./Producer";
import { Doc } from "./type";

function sampleProvinceData(): Doc {
    return {
        name: "Asia",
        producers: [
            { name: "Byzantium", cost: 10, production: 9 },
            { name: "Attalia", cost: 12, production: 10 },
            { name: "Sinope", cost: 10, production: 6 },
        ],
        demand: 30,
        price: 20,
    };
}

class Province {
    private name: string;

    private producer: Producer[];

    public totalProduction: number;

    private demand: number;

    private price: number;

    constructor(doc: Doc) {
        this.name = doc.name;
        this.producer = [];
        this.totalProduction = 0;
        this.demand = doc.demand;
        this.price = doc.price;
        doc.producers.forEach(producer => {
            if (producer instanceof Producer) {
                this.addProducer(new Producer(this, producer));
            }
        });
    }

    addProducer(arg: Producer) {
        this.producer.push(arg);
        this.totalProduction += arg.production;
    }
}

export default Province;
