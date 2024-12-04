const express = require('express');
const bodyParser = require('body-parser');
const expenseRoutes = require('./Routes/expense');
const cronService = require('./Services/cron');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/expenses', expenseRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    cronService.init(); 
});
