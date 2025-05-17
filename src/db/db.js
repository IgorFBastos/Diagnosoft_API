

const mongoose = require("mongoose");

require("dotenv").config();

const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;


async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("🟢 MongoDB conectado com sucesso");
    } catch (error) {
        console.error("🔴 Erro ao conectar no MongoDB:", error);
        process.exit(1); 
    }
}

module.exports = connectDB;