{
    class Employee {
        constructor (name, id, monthlyCost) {
            this._id = id;
            this._name = name;
            this._monthlyCost = monthlyCost;
        }

        get id () {
            return this._id;
        }

        get name () {
            return this._name;
        }

        get monthlyCost () {
            return this._monthlyCost;
        }

        get annualCost () {
            return this._monthlyCost * 12;
        }
    }

    class Department {

        constructor (name, staff) {
            this._name = name;
            this._staff = staff;
        }

        get name () {
            return this._name;
        }

        get staff () {
            return this._staff.slice();
        }

        get totalMonthCost () {
            return this.staff.map(e => e.monthlyCost).reduce((sum, cost) => sum + cost, 0);
        }

        get headCount () {
            return this.staff.length;
        }

        get totalAnnualCost () {
            return this.totalMonthCost * 12;
        }
    }
}
{
    class Party {
        constructor (name) {
            this._name = name;

        }

        get name () {
            return this._name;
        }

        get annualCost () {
            return this.monthlyCost * 12;
        }
    }

    class Employee extends Party {
        constructor (name, id, monthlyCost) {
            super(name);
            this._id = id;
            this._monthlyCost = monthlyCost;
        }

        get id () {
            return this._id;
        }

        get monthlyCost () {
            return this._monthlyCost;
        }

    }

    class Department extends Party {

        constructor (name, staff) {
            super(name);
            this._staff = staff;
        }

        get staff () {
            return this._staff.slice();
        }

        get totalMonthCost () {
            return this.staff.map(e => e.monthlyCost).reduce((sum, cost) => sum + cost, 0);
        }

        get headCount () {
            return this.staff.length;
        }

    }
}
