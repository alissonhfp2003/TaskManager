const express = require("express");
const router = require("./routes/taskRoutes");
const connectDB = require("./config/database"); 
const cors = require("cors");

const app = express();
const port = process.env.PORT ;

app.use(cors());
connectDB();  
app.use(express.json());


app.use(router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});