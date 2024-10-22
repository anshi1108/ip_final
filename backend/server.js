const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
let contacts = [];
app.get("/contacts", (req, res) => {
    res.json(contacts);
});
app.post("/contacts", (req, res) => {
    const { name, phone } = req.body;
    contacts.push({ name, phone });
    res.status(201).send("Contact added");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
