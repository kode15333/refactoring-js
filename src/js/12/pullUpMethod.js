{
    class Party {

    }

    class Employee extends Party {
        get annualCost () {
            return this.monthyCost * 12;
        }
    }

    class Department extends Party {
        get totalAnnualCost () {
            return this.monthyCost * 12;
        }
    }

}

class Party {

    get monthyCost () {

        throw new SubClassResponsibilityError();
    }

    get annualCost () {
        return this.monthyCost * 12;
    }
}

class Employee extends Party {
}

class Department extends Party {
}
