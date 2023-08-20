const Sequelize = require("sequelize")
const db = require("../../config/db")

const Candidato = db.define("candidato",{
    numero:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false 
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    vice:{
        type:Sequelize.STRING,
        allowNull:false
    },
    partido:{
        type:Sequelize.STRING(15),
        allowNUll:false
    },
    qtd_votos:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    secao:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:true
    },
    image_vice:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

module.exports = Candidato