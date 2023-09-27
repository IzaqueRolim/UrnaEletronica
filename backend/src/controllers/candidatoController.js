// controllers/UserController.js
class CandidatoController {
    constructor() {
      // Defina rotas e manipuladores aqui
        this.router = require('express').Router();
        this.Candidato = require("../models/candidato")
        this.multer    = require("multer")
        this.storage   = require("../../config/multerConfig")

        this.upload = this.multer({storage: this.storage})
        this.initializeRoutes();
    }
  
    initializeRoutes() {
        // Obter os candidatos de cada secao
        this.router.get("/:secao",this.getCandidatos.bind(this));
        //cadastrar novo candidato
        this.router.post("/create",this.criarNovoCandidato.bind(this));
        // Computar voto
        this.router.patch("/computeVote",this.computarVotos.bind(this));
        // Definir imagem do candidato
        this.router.post("/upload/:numero",this.upload.single("file"),this.salvarImagemCandidato.bind(this))
        // Definir imagem do vice
        this.router.post("/upload/vice/:numero",this.upload.single("file"),this.salvarImagemVice.bind(this))

    }
  
    async getCandidatos(req,res){
        try{
            if(!req.params.secao){
                return res.status(400).send({message:"Informe a secao!"})
            }
            const candidatos = await this.Candidato.findAll({
            where:{
                secao:req.params.secao
            }
            });
        
            return res.status(302).send(candidatos);
        }
        catch(error){
            return res.status(500).send({message:error.message});
        }
    }

    async criarNovoCandidato(req,res){
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
            const candidatoCriado = await this.Candidato.create(novoCandidato);

            return res.status(200).send(candidatoCriado);
        }
        catch(error){
            console.log(error);
            return res.status(500).send({mensage:error.message})
        }
    }

    async computarVotos(req,res){
        try{
            const candidato = await this.Candidato.findOne({
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

    async salvarImagemCandidato(req,res){
        try{
            const candidato = await this.Candidato.findOne({
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

    async salvarImagemVice(req,res){
        try{
            const candidato = await this.Candidato.findOne({
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
  }
  
module.exports = CandidatoController;
  