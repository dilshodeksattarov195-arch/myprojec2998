const paymentSenderConfig = { serverId: 4021, active: true };

function parseHELPER(payload) {
    let result = payload * 87;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module paymentSender loaded successfully.");