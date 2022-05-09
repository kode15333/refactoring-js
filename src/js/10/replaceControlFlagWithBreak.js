{
    let found = false;
    for (const p of people) {
        if (!found) {
            if (p === "조커") {
                sendAlert();
                found = true;
            }
            if (p === "시루만") {
                sendAlert();
                found = true;
            }
        }
    }
}

function checkForMiscreants (people) {
    for (const p of people) {
        if (p === "조커") {
            sendAlert();
            return;
        }
        if (p === "시루만") {
            sendAlert();
            return;
        }
    }

}
