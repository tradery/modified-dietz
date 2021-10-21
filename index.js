/**
 * Get Modified Dietz
 * 
 * Returns the Modified Dietz rate of return for an investment portfolio.
 * 
 * @param {Float} startingBalance The portfolio balance at the start of the period.
 * @param {Float} endingBalance The portfolio balance at the end of the period.
 * @param {Array} cashflows An array of cash flows, one value for each unit of time in the period.
 * @returns 
 */
function getModifiedDietz(startingBalance, endingBalance, cashflows = []) {
    if (!isNumeric(startingBalance)) throw ('`startingBalance` must be a number!');
    if (!isNumeric(endingBalance)) throw ('`startingBalance` must be a number!');
    if (!Array.isArray(cashflows)) throw ('`cashflows` must be an array!');
    cashflows.forEach(element => {
        if (!isNumeric(element)) throw ('Each cashflow in the array must be a number!');
    });

    const periods = cashflows.length;
    const numerator = endingBalance - startingBalance - sum(cashflows);
    let denominator = startingBalance;
    for (let i = 0; i < periods; i++) {
        denominator += cashflows[i] * (1 - ((i + 1) / periods));
    }

    return numerator / denominator;
}

function isNumeric(num) {
    return !isNaN(num)
}

function sum(arr) {
    return arr.reduce(function (prev, next) {
        return prev + next;
    }, 0);
}

module.exports = { getModifiedDietz, isNumeric, sum };