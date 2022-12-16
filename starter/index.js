const finances = [
    ['Jan-2010', 200],
    ['Feb-2010', 300],
    ['Mar-2010', -200],
    ['Apr-2010', 500],
];

// The total number of months included in the dataset.

let totalMonths = finances.length;
console.log('Total number of months: ', totalMonths);

// The net total amount of Profit/Losses over the entire period.

const profitLoss = finances.filter((el) => el[1]);
const totalProfitLoss = profitLoss
    .map((el) => el[1])
    .reduce((accValue, curValue) => accValue + curValue);
console.log('Total amount of Profit/Losses over the entire period: ', totalProfitLoss);

// The average of the changes in Profit/Losses over the entire period.
// You will need to track what the total change in profits is from month to month and then find the average.

const trackChange = finances.map((el) => el[1]);
const avgProfitLoss = trackChange.reduce((accValue, curValue) => accValue + curValue, 0) / (totalMonths); // (Total/Number of months)
console.log('The average of the changes in Profit/Losses: ', avgProfitLoss);

// The greatest increase in profits (date and amount) over the entire period.
// The greatest decrease in profits (date and amount) over the entire period.
const bestMonth = {
    monthName: '',
    profit: 0,
};

const badMonth = {
    monthName: '',
    profit: 0,
};

finances.forEach((month) => {
    if (month[1] > bestMonth.profit) {
        bestMonth.monthName = month[0];
        bestMonth.profit = month[1];
    }
    if (month[1] < badMonth.profit) {
        badMonth.monthName = month[0];
        badMonth.profit = month[1];
    }
    return {bestMonth, badMonth}
});
console.log('The greatest increase in profit is: ', bestMonth);
console.log('The greatest decrease in profit is: ', badMonth);