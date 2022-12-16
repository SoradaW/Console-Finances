const finances1 = [
    ['Jan-2010', 300],
    ['Feb-2010', 100],
    ['Mar-2010', 500],
    ['Apr-2010', -300],
    ['May-2010', 200],
    ['Jun-2010', 200]
];

let totalMonths1 = finances1.length;
console.log('Total number of months: ', totalMonths1);

const profitLoss1 = finances1.filter((el) => el[1] > 0);
const totalProfitLoss1 = profitLoss1
    .map((el) => el [1])
    .reduce((accVal, curVal) => accVal + curVal, 0);

console.log('Total amount of Profit/Losses over the entire period: ', totalProfitLoss1);