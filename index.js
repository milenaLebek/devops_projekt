const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("System DevOps Dziala!"));
app.get("/products", (req, res) => res.json([{ id: 1, name: "Laptop" }]));

const server = app.listen(PORT, () => console.log(`Server on ${PORT}`));
module.exports = { app, server };
