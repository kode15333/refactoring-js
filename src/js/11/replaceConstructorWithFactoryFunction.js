{
    class Employee {
        constructor (name, typeCode) {
            this._name = name;
            this._tyeCode = typeCode;
        }

        get name(){
            return this._name;
        }

        get type(){
            return Employee.legalTypeCodes[this._tyeCode]
        }

        static get legalTypeCodes(){
            return {'E' : 'Engineer', 'M' : 'Manager', 'S' : 'Salesman'}
        }
    }

    cadidate = new Employee(document.name, document.empType);

    const leadingEngineer = new Employee(document.leadEngineer, 'E');
}


function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
}


cadidate = createEmployee(document.name, document.empType);

const leadingEngineer = createEmployee(document.leadEngineer, 'E');
