{
    class Party {}

    class Employee extends Party {
        constructor (name, id, monthlyCost) {
            super();
            this._id = id;
            this._name = name;
            this._monthlyCost = monthlyCost;
        }
    }

    class Department extends Party {
        constructor (name, staff) {
            super();
            this._name = name;
            this._staff = staff;
        }
    }
}

{
    class Party {
        constructor (name) {
            this._name = name;
        }
    }

    class Employee extends Party {
        constructor (name, id, monthlyCost) {
            super(name);
            this._id = id;
            this._monthlyCost = monthlyCost;
        }
    }

    class Department extends Party {
        constructor (name, staff) {
            super(name);
            this._staff = staff;
        }
    }
}
{
    class Employee {
        constructor (name) {

        }

        get isPrivileged () {}

        assignCar () {}
    }

    class Manager extends Employee {
        constructor (name, grade) {
            super(name);
            this._grade = grade;
            if (this.isPrivileged) this.assignCar();
        }

        get isPrivileged () {
            return this._grade > 4;
        }
    }
}


class Employee {
    constructor (name) {

    }

    get isPrivileged () {}

    assignCar () {}

    finishConstruction(){
        if (this.isPrivileged) this.assignCar();
    }
}

class Manager extends Employee {
    constructor (name, grade) {
        super(name);
        this._grade = grade;
        this.finishConstruction()
    }

    get isPrivileged () {
        return this._grade > 4;
    }
}
