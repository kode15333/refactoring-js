import Province from "./Province";
import { ProducerType } from "./type";

class Producer {
    private province: Province;

    readonly name: string;

    constructor(aProvince: Province, data: ProducerType) {
        this.province = aProvince;
        this.cost = data.cost;
        this.name = data.name;
        this.production = data.production || 0;
    }

    get cost(): number {
        return this.cost;
    }

    set cost(value: number) {
        this.cost = value;
    }

    get production(): number {
        return this.production;
    }

    set production(amount: number) {
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this.province.totalProduction += newProduction - this.production;
        this.production = newProduction;
    }
}

export default Producer;
