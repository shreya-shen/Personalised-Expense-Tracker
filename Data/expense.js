const expenses = [];
const predefinedCategories = ['Food', 'Travel', 'Entertainment', 'Utilities', 'Miscellaneous'];

const addExpenseToStorage = (expense) => {
    expenses.push({ ...expense, date: new Date(expense.date) });
};

const filterExpenses = (category, startDate, endDate) => {
    let filtered = expenses;

    if (category) filtered = filtered.filter((exp) => exp.category === category);
    if (startDate) filtered = filtered.filter((exp) => exp.date >= new Date(startDate));
    if (endDate) filtered = filtered.filter((exp) => exp.date <= new Date(endDate));

    return filtered;
};

const analyzeExpenses = () => {
    const totalByCategory = {};
    let totalAmount = 0;

    expenses.forEach(({ category, amount }) => {
        totalByCategory[category] = (totalByCategory[category] || 0) + amount;
        totalAmount += amount;
    });

    const highestSpendingCategory = Object.entries(totalByCategory).reduce(
        (max, [key, value]) => (value > max.amount ? { category: key, amount: value } : max),
        { category: null, amount: 0 }
    );

    return {
        totalByCategory,
        totalAmount,
        highestSpendingCategory,
    };
};

module.exports = { expenses, predefinedCategories, addExpenseToStorage, filterExpenses, analyzeExpenses };