function printDetail(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
    const { today } = Clock;
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    );
}

function calculateOutstanding(invoice) {
    let outstanding = 0;

    // 미체결 채무(outstring)를 계산한다.
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    return outstanding;
}

function printBanner() {
    console.log("**************");
    console.log("******고객 채무****");
    console.log("**************");
}

function printOwing1(invoice) {
    printBanner();
    const outstanding = calculateOutstanding();

    // 세부 사항 출력
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
}

function printOwing2(invoice) {
    printBanner();
    const outstanding = calculateOutstanding();
    printDetail(outstanding);

    function printDetail(outstanding) {
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액: ${outstanding}`);
    }
}

function printOwing3(invoice) {
    printBanner();

    const outstanding = calculateOutstanding();

    recordDueDate(invoice);
    printDetail(invoice, outstanding);
}
