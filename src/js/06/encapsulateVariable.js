{
    let defaultOwner = { firstName: "마틴", lastName: "파울러" };
    spaceship.owner = defaultOwner;

    defaultOwner = { firstName: "레베카", lastName: "파슨스" };

    function getDefaultOwner () {
        return defaultOwner;
    }

    function setDefaultOwner (arg) {
        defaultOwner = arg;
    }

    {

        spaceship.owner = getDefaultOwner();

        setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });
    }

    const owner1 = getDefaultOwner();
    assert.equal("파울러", owner1.lastName, "처음값 확인");
    const owner2 = getDefaultOwner();
    owner2.lastName = "파슨스";
    assert.equal("파슨스", owner1.lastName, "owner2를 변경한 후");

}


let defaultOwner = { firstName: "마틴", lastName: "파울러" };
function defaultOwner (){
    return new Person(defaultOwner)
}

function setDefaultOwner(arg) {
    defaultOwner = arg;
}

class Person {

    constructor (data) {
        this._lastName = data.lastName
        this._firstName = data.firstName
    }
    get firstName () {
        return this._firstName;
    }
    get lastName () {
        return this._lastName;
    }
}
