const { expenses, predefinedCategories, addExpenseToStorage, filterExpenses, analyzeExpenses } = require('../Data/expense');

exports.addExpense = (req, res) => {
    const { category, amount, date } = req.body;

    if (!predefinedCategories.includes(category)) {
        return res.status(400).json({ status: 'error', error: 'Invalid category' });
    }

    if (amount <= 0) {
        return res.status(400).json({ status: 'error', error: 'Amount must be a positive number' });
    }

    addExpenseToStorage({ category, amount, date });
    res.status(201).json({ status: 'success', data: 'Expense added successfully' });
};

exports.getExpenses = (req, res) => {
    const { category, startDate, endDate } = req.query;
    const filteredExpenses = filterExpenses(category, startDate, endDate);
    res.json({ status: 'success', data: filteredExpenses });
};

exports.analyzeSpending = (req, res) => {
    const analysis = analyzeExpenses();
    res.json({ status: 'success', data: analysis });
};
