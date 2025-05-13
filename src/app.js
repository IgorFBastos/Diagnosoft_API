const express = require("express");
const app = express();
const connectDB = require("./db/db");
const formRoutes = require("./routes/formRoutes");
const cors = require("cors");


require("dotenv").config();

connectDB();


app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API funcionando!");
});

app.use("/api/forms", formRoutes);


module.exports = app;
