const express   = require("express")
const app       = express() 

const database  = require("./config/db")
const Candidato = require("./src/models/candidato")

const multer    = require("multer")
const storage   = require("./config/multerConfig")

const upload = multer({storage: storage})

app.use("/files", express.static("uploads"))

async function getCandidatos(req,res){
    try{
        const candidatos = await Candidato.findAll({
        where:{
            secao:req.params.secao
        }
        });
    
        return res.send(candidatos);
    }
    catch(error){
        return res.status.send({message:error.message});
    }
}

async function criarNovoCandidato(){
    try{
        const novoCandidato = 
        {
            nome:req.body.nome,
            numero:req.body.numero,
            vice:req.body.vice,
            partido:req.body.partido,
            secao:req.body.secao,
            image:"",
            qtd_votos:0
        }
        await Candidato.create(novoCandidato);

        return res.status(200).send({mensage:"Cadastrado com sucesso :)"});
    }
    catch(error){
        console.log(error);
        return res.status(500).send({mensage:error.message})
    }
    
}

async function atualizarVotos(){
    try{
        const candidato = await Candidato.findOne({
            where:{
                numero:req.body.numero
            }
        });

        let votos = candidato.dataValues.qtd_votos;
        votos+=1;
    
        await candidato.update({ qtd_votos: votos });
        await candidato.save();
    
        return res.status(200).send({mensage:"voto computado"});
    }
    catch(error){
        return res.status(500).send({message:error.message});
    }
}

async function salvarImagemCandidato(req,res){
    try{
        const candidato = await Candidato.findOne({
            where:{
                numero:req.params.numero
            }
        });
    
        await candidato.update({image:req.file.filename});
        await candidato.save();
    
        return res.json(req.file.filename);
    }
    catch(error){
        return res.status(500).send({message:error.message});
    }
}

async function salvarImagemVice(req,res){
    try{
        const candidato = await Candidato.findOne({
            where:{
                numero:req.params.numero
            }
        });
    
        await candidato.update({image_vice:req.file.filename});
        await candidato.save();
    
        return res.json(req.file.filename);
    }
    catch(error){
        return res.status(500).send({message:error.message});
    }
}


// Obter todos os candidatos pela secao
app.get("/:secao",getCandidatos(req,res));

//cadastrar novo candidato
app.post("/post",criarNovoCandidato(req,res));

// Definir imagem do candidato
app.post("/upload/:numero",upload.single("file"),salvarImagemCandidato(req,res))

// Definir imagem do vice
app.post("/upload/vice/:numero",upload.single("file"),salvarImagemVice(req,res))

///atualizar votos
app.patch("/patch",atualizarVotos(req,res));