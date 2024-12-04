const cron = require('node-cron');
const { analyzeExpenses } = require('../Data/expense');

const init = () => {
    cron.schedule('0 0 * * *', () => {
        const analysis = analyzeExpenses();
        console.log('Daily Expense Summary:', analysis);
    });

    cron.schedule('0 0 * * 0', () => {
        const analysis = analyzeExpenses();
        console.log('Weekly Expense Summary:', analysis);
    });

    cron.schedule('0 0 1 * *', () => {
        const analysis = analyzeExpenses();
        console.log('Monthly Expense Summary:', analysis);
    });
};

module.exports = { init };