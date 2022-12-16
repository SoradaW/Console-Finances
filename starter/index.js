const finances = [
    ['Jan-2010', 300],
    ['Feb-2010', 300],
    ['Mar-2010', 500],
    ['Apr-2010', -500],
    ['May-2010', -200],
    ['Jun-2010', 100]
];

// The total number of months included in the dataset.

let totalMonths = finances.length;
console.log('Total number of months: ', totalMonths);

// The net total amount of Profit/Losses over the entire period.

const profitLoss = finances.filter((el) => el[1]);
const totalProfitLoss = profitLoss
    .map((el) => el [1])
    .reduce((accValue, curValue) => accValue + curValue);

console.log('Total amount of Profit/Losses over the entire period: ', totalProfitLoss);

// The average of the changes in Profit/Losses over the entire period.

// You will need to track what the total change in profits is from month to month and then find the average. (Total/Number of months)

// The greatest increase in profits (date and amount) over the entire period.

// The greatest decrease in losses (date and amount) over the entire period.
