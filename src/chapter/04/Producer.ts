import Province from "./Province";

class Producer {
    private province: Province;

    readonly name: string;

    constructor(aProvince: Province, data: Producer) {
        this.province = aProvince;
        this.cost = data.cost;
        this.name = data.name;
        this.production = data.production || 0;
    }

    get cost(): number {
        return this.cost;
    }

    set cost(args: number | string) {
        this.cost = parseInt(String(args), 10);
    }

    get production(): number {
        return this.production;
    }

    set production(amountStr: number | string) {
        const amount = parseInt(String(amountStr), 10);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this.province.totalProduction += newProduction - this.production;
        this.production = newProduction;
    }
}

export default Producer;
