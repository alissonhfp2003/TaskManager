const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try {
     mongoose.connect(process.env.URL_BD);
        console.log("Conexão bem sucedida com o banco de dados");
    } catch (error) {
        console.error("Erro ao conectar no banco de dados:", error);
    }
};

module.exports = connectDB;