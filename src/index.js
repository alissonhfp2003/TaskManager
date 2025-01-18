const express = require("express");
const router = require("./routes/taskRoutes");
const connectDB = require("./config/database"); 

const app = express();
const port = process.env.PORT ;

connectDB();  
app.use(express.json());

//rotas
app.use(router);

//retorno ao iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});