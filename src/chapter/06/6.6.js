// before
import * as assert from "assert";

const defaultOwner = { firstName: "마틴", lastName: "파울러" };

// after
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

export function defaultOwner() {
    return { ...defaultOwnerData };
}
export function setDefaultOwner(arg) {
    defaultOwnerData = arg;
}

class Person {
    constructor(data) {
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get firstName() {
        return this._firstName;
    }
}

spaceship.owner = defaultOwner;
spaceship.owner = defaultOwner();

// defaultOwner = { firstName: "레베카", lastName: "파슨스" };
setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });

const owner1 = defaultOwner();
assert.equal("파울러", owner1.lastName, "처음값 확인");

const owner2 = defaultOwner();
owner2.lastName = "파슨스";
assert.equal("파슨스", owner1.lastName, "owner2 변경한후");
