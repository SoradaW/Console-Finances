const finances = [
    ['Jan-2010', 200],
    ['Feb-2010', 300],
    ['Mar-2010', -200],
    ['Apr-2010', 500],
];

//! The total number of months included in the dataset.

let totalMonths = finances.length;
console.log('Total number of months: ', totalMonths);

//! The net total amount of Profit/Losses over the entire period.
const sumProfitLoss = finances.reduce (
    (accumulator, currentValue) => accumulator + currentValue[1],
    0,
);
console.log('Total amount of Profit/Losses over the entire period: ', sumProfitLoss);

// -- another solution* -- //
// -- const profitLoss = finances.filter((el) => el[1]); 
// -- const totalProfitLoss = profitLoss
    // -- .map((el) => el[1])
    // -- .reduce((accumulator, currentValue) => accumulator + currentValue);
// --console.log('Total amount of Profit/Losses over the entire period: ', totalProfitLoss);

//! The average of the changes in Profit/Losses over the entire period.
//! You will need to track what the total change in profits is from month to month and then find the average.

const trackChange = finances.map((el) => el[1]);

const avgProfitLoss = trackChange.reduce((startValue, subtractValue, i) => {
    let resultValue = (i > 1) ? startValue : {total: startValue[1], average: startValue[1], sumChange: 0, lastMonth: startValue[1], increase: startValue, decrease: startValue},
        change = subtractValue[1] - resultValue.lastMonth

    resultValue.total += subtractValue[1]
    resultValue.sumChange += change
    resultValue.lastMonth = subtractValue[1]
    resultValue.average = resultValue.sumChange / i
    resultValue.increase = (resultValue.includes > change) ? resultValue.increase : [subtractValue[0], change]
    resultValue.increase = (resultValue.includes < change) ? resultValue.increase : [subtractValue[0], change]
    return resultValue
})

//}accValue + curValue, 0) / (totalMonths); // (Total/Number of months)
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

