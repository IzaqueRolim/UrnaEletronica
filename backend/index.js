const express   = require("express")
const app       = express() 

const database  = require("./config/db")
const cors      = require("cors")
const port      = 5050

const CandidatoController = require('./src/controllers/candidatoController');
const candidatoController = new CandidatoController();



//para poder usar o req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    app.use(cors());
    next();
});

// Use o roteador do controlador
app.use('/candidatos/', candidatoController.router);

app.listen(port,async()=>{
    await database.sync();
    console.log(`servidor rodando na porta ${port}`)
})