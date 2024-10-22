const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// POST route to calculate net salary
app.post('/calculate', (req, res) => {
    const { salary } = req.body;

    // Assuming a simple tax rate of 20% for calculation
    const taxRate = 0.2;
    const netSalary = salary - (salary * taxRate);

    res.json({ netSalary: netSalary.toFixed(2) });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
