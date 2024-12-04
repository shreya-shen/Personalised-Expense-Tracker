# Personalised-Expense-Tracker
Mini Project for Milestone 01 of Skill Lab

Overview
The Personal Expense Tracker API is a RESTful API designed to help users manage their daily expenses. It allows users to log expenses, filter them based on criteria, analyze spending patterns, and retrieve insightful reports. This project emphasizes simplicity and efficient design for practical budgeting and financial planning.

Features
Add Expense: Log a new expense with details such as category, amount, and date.
Filter Expenses: Retrieve expenses filtered by category, date range, or both.
Analyze Spending: Gain insights into total spending, spending by category, and the highest spending category.
Automated Reports: Uses cron jobs (can be integrated) for periodic summary reports.

Concepts Demonstrated
1. RESTful API Design
CRUD operations implemented through RESTful endpoints.
POST /expenses: Add a new expense.
GET /expenses: Retrieve filtered expenses.
GET /expenses/analysis: Analyze expenses.

3. Data Validation
Ensuring data integrity:
Predefined categories are validated before adding expenses.
Expense amount must be a positive number.

4. Filtering and Querying
Filtering expenses dynamically based on:
Category
Date Range

5. Data Analysis
Calculation of:
Total spending by category.
Overall total spending.
Highest spending category.

6. Modular Functions
Separation of Concerns: Functions for adding, filtering, and analyzing expenses are modular to ensure reusability and maintainability.
