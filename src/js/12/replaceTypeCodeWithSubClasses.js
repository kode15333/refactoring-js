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
            return "engineer";
        }
    }

    class Salesman extends Employee {
        get type () {
            return "salesman";
        }
    }

    class Manager extends Employee {
        get type () {
            return "manager";
        }
    }

    function createEmployee (name, type) {
        switch (type) {
            case "engineer":
                return new Engineer(name);
            case "salesman":
                return new Salesman(name);
            case "manager":
                return new Manager(name);
            default:
                throw new Error(`${type} is no Employee Type`);
        }
    }
}
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

        get type () {
            return this._type;
        }

        set type (arg) {
            return this._type = arg;
        }

        get capitalizedType () {
            return this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
        }

        toString () {
            return `${this._name} (${this._type})`;
        }
    }
}

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

        get typeString () {
            return this._type.toString();
        }

        get type () {
            return this._type;
        }

        set type (arg) {
            return Employee.createEmployee(arg);
        }

        get capitalizedType () {
            return this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase();
        }

        toString () {
            return `${this._name} (${this.type.capitalizedName})`;
        }

        static createEmployee (sString) {
            switch (aString) {
                case "engineer":
                    return new Engineer();
                case "manager":
                    return new Manager();
                case "salesman" :
                    return new Salesman();
                default:
                    throw new Error(`${aString} is not a valid`);
            }
        }
    }

    class EmployeeType {
        get capitalizedName () {
            return this.toString().charAt(0).toUpperCase() + this.toString().substr(1).toLowerCase();
        }
    }

    class Engineer extends EmployeeType {
        toString () { return "engineer";}
    }

    class Manager extends EmployeeType {
        toString () { return "manager";}
    }

    class Salesman extends EmployeeType {
        toString () { return "salesman";}
    }
}
