{
    class Employee {
        constructor (name, type) {
            this.validateType(type);
            this._name = name;
            this._type = type;
        }

        validateType (arg) {
            if (["engineer", "manager", "salesman"].includes(arg)) {
                throw new Error(`${arg} is not Employee type`);
            }
        }

        toString () {
            return `${this._name} (${this._type})`;
        }
    }
}

{
    class Employee {
        constructor (name) {
            this._name = name;
        }

        toString () {
            return `${this._name} (${this._type})`;
        }
    }

    class Engineer extends Employee {
        get type () {
            return 'engineer';
        }
    }

    class Salesman extends Employee {
        get type() {
            return 'salesman'
        }
    }

    class Manager extends Employee {
        get type() {
            return 'manager'
        }
    }


    function createEmployee (name, type) {
        switch (type) {
            case 'engineer': return new Engineer(name);
            case 'salesman': return new Salesman(name);
            case 'manager': return new Manager(name);
            default: throw new Error(`${type} is no Employee Type`)
        }
    }
}
