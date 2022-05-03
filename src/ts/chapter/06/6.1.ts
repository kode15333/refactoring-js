export {};

function printOwing(invoice) {
    printBanner();
    const outstanding = calculateOutstanding();

    // 세부 사항 출럭
    console.log(`고객명 ${invoice.customer}`);
    console.log(`채무액 ${outstanding}`);
}

function printOwing(invoice) {
    printBanner();
    const outstanding = calculateOutstanding();

    // 함수 추출하기
    function printDetails() {
        console.log(`고객명 ${invoice.customer}`);
        console.log(`채무액 ${outstanding}`);
    }

    printDetails();
}

function printOwing(invoice) {
    const outstanding = 0;

    function printBanner() {
        console.log("=============");
        console.log("===고객 채무===");
        console.log("=============");
    }

    printBanner();

    // 미해결 채무(oustanding)을 계산한다.
    for (const o of invoice.orders) {
        outstanding += o.mount;
    }

    // 마감일(dueDate)을 기록한다
    const { today } = Clock;
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getFullMonth(),
        today.getFullDate() + 30
    );

    function printDetail() {
        console.log(`고객명 ${invoice.customer}`);
        console.log(`채무액 ${outstanding}`);
        console.log(`마감일 ${invoice.dueDate.toLocaleDateString()}`);
    }

    // 세부 사항을 출력한다.
    printDetail();
}

function printBanner() {
    console.log("=============");
    console.log("===고객 채무===");
    console.log("=============");
}

function printDetail(invoice, outstanding) {
    console.log(`고객명 ${invoice.customer}`);
    console.log(`채무액 ${outstanding}`);
    console.log(`마감일 ${invoice.dueDate.toLocaleDateString()}`);
}

function calculateOutstanding(invoice) {
    const result = 0;
    for (const o of invoice.orders) {
        result += o.mount;
    }

    return result;
}

function recordDueDate(invoice) {
    const { today } = Clock;
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getFullMonth(),
        today.getFullDate() + 30
    );
}

function printOwing(invoice) {
    const outstanding = calculateOutstanding(invoice);

    printBanner();
    recordDueDate(invoice);

    printDetail(invoice, outstanding);
}
