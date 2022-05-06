{
    let tpHd = "untitled";

    result += `<h1>${tpHd}</h1>`;

    tpHd = obj["articleTitle"];
}

{
    let _title = "untitled";

    result += `<h1>${title()}</h1>`;

    setTitle(obj["articleTitle"]);

    function title () {
        return _title;
    }

    function setTitle (arg) {
        _title = arg;
    }
}

const companyName = "애크미 구스베리";
const cpyNm = companyName;
