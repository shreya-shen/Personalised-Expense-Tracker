const express = require('express');
const { addExpense, getExpenses, analyzeSpending } = require('../Controllers/expense');

const router = express.Router();

router.post('/', addExpense);
router.get('/', getExpenses);
router.get('/analysis', analyzeSpending);

module.exports = router;
