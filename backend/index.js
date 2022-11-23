const express = require("express")
const app = express() 

const database   = require("./db")
const Candidato  = require("./candidato")

const multer     = require("multer")
const storage    = require("./multerConfig")

const cors = require("cors")

const port = 5050

const upload = multer({storage: storage})

app.use("/files", express.static("uploads"))

app.post("/upload/:numero",upload.single("file"),async(req,res)=>{
    const candidato = await Candidato.findOne({
        where:{
            numero:req.params.numero
        }
    })

    await candidato.update({image:req.file.filename})
    await candidato.save()

    return res.json(req.file.filename)
})
app.post("/upload/vice/:numero",upload.single("file"),async(req,res)=>{
    const candidato = await Candidato.findOne({
        where:{
            numero:req.params.numero
        }
    })

    await candidato.update({image_vice:req.file.filename})
    await candidato.save()

    return res.json(req.file.filename)
})

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

//cadastrar novo candidato
app.post("/post",async(req,res)=>{
    try{
        const novoCandidato = await Candidato.create(
        {
            nome:req.body.nome,
            numero:req.body.numero,
            vice:req.body.vice,
            partido:req.body.partido,
            secao:req.body.secao,
            image:"",
            qtd_votos:0
        })

        res.status(200).send({mensage:"Cadastrado com sucesso :)"})
    }
    catch(error){
        res.status(400).send({mensage:error.message})
    }
    

})

///atualizar votos
app.patch("/patch",async(req, res)=>{
    const candidato = await Candidato.findOne({
        where:{
            numero:req.body.numero
        }
    })
    let votos = candidato.dataValues.qtd_votos
    votos+=1

    await candidato.update({ qtd_votos: votos })

    await candidato.save()

    res.status(200).send({mensage:"voto computado"})
    
})

//obter os candidatos pela secao
app.get("/:secao", async(req,res)=>{

    const candidatos = await Candidato.findAll({
        where:{
            secao:req.params.secao
        }
    })

    res.send(candidatos)
})

app.listen(port,async()=>{
     await database.sync()
})