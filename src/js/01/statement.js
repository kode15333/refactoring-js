import invoicesData from "./data/invoices.json";
import playsData from "./data/plays.json";
import createStatementData from "./createStatement";

function statement (invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderHtml (data) {
    let result = `<h1>청구 내역 (고객명 ${data.customer})</h1>\n`;

    result += "<table>\n";
    result += "<tr><td>연극</td><th>좌석 수</th><th>금액</th></tr>";
    for (let perf of data.performances) {
        result += `
        <tr>
            <td>${perf.play.name}</td>
            <td>${perf.audience}석</td>
            <td>${usd(perf.amount)}</td>
        </tr>
        `;
    }
    result += "</table>\n";
    result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`;

    return result;

}

function renderPlainText (data, plays) {
    let result = `청구 내역 (고객명 : ${data.customer})\n`;

    for (let perf of data.performances) {
        result += ` ${perf.play.name} : ${usd(perf.amount)} (${perf.audience}석)\n`;
    }

    result += `총액: ${usd(data.totalAmount)}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
    console.log(result);

    return result;

}

function usd (aNumber) {
    return new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD",
        minimumFractionDigits: 2
    }).format(aNumber / 100);
}

statement(invoicesData[0], playsData);
