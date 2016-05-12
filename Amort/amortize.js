//var readlineSync = require('readline-sync');

var loan_amount = readlineSync.question("Type the loan amount: ");
while (loan_amount < 1000) var loan_amount = readlineSync.question("Try again ");

var interest_rate = readlineSync.question("Type the interest rate: ");
var months = readlineSync.question("Type the months ");
//while (months < 6 || months > 60) var months = readlineSync.question("Try again ");


function pmt(rate, nper, pv) {
    var pvif, pmt;

    pvif = Math.pow(1 + rate, nper);
    pmt = rate / (pvif - 1) * -(pv * pvif);

    return pmt;
};

var amort = pmt(interest_rate / 100 / months, months, -loan_amount).toFixed(2);

var payment = "The calculated payment is: " + amort;

console.log(payment);