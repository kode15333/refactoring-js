const organization = {
    name: "애크미 구스베리",
    count: "GB"
};

result += `<h1>${organization.name}</h1>`;
organization.name == newName;

function getRawDateOfOrganization () {return organization;};

{
    result += `<h1>${getRawDateOfOrganization().name}</h1>`;
    getRawDateOfOrganization().name == newName;
}

{
    class Organiztion {
        get country () {
            return this._country;
        }

        set country (value) {
            this._country = value;
        }
        get name () {
            return this._name;
        }

        set name (value) {
            this._name = value;
        }
        constructor (data) {
            this._name = data.name;
            this._country = data.country;
        }

    }

    const organization = new Organiztion({
        name: "애크미 구스베리",
        count: "GB"
    });

    function getRawDateOfOrganization () {
        return organization.name;
    }

    function getOrganization () {
        return organization;
    }
}
