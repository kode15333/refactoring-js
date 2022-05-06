import Producer from "./Producer";

class Province {
    constructor (doc) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }

    get name () {
        return this._name;
    }

    get producers () {
        return this._producers;
    }

    get totalProduction () {
        return this._totalProduction;
    }

    set totalProduction (value) {
        this._totalProduction = value;
    }

    get demand () {
        return this._demand;
    }

    set demand (value) {
        this._demand = value;
    }

    get price () {
        return this._price;
    }

    set price (value) {
        this._price = value;
    }

    addProducer (arg) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

    get shortfall () {
        return this._demand - this.totalProduction;
    }

    get profit () {
        return this.demandValue - this.demandCost;
    }

    get demandValue () {
        return this.satisfiedDemand * this.price;
    }

    get satisfiedDemand () {
        return Math.min(this._demand, this.totalProduction);
    }

    get demandCost () {
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

export default Province