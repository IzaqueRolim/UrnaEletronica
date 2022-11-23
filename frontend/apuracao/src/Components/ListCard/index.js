import Card from "../Card"
import { List } from "./style"
import axios from 'axios'
import { useState,useEffect } from "react"

function ListCard(){
    let votosTotal = 0
    const url = "http://localhost:5050/"
    const [cand,SetCand] = useState([])
    const [votos,SetVotos] = useState(0)
    
    const GetCand = async () =>{
        try{
            const response = await axios.get(url+"1")
            
            const data = response.data
            SetCand(data)
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        GetCand();
        cand.forEach((e)=>{
            votosTotal+=e.qtd_votos;
            
        })
        SetVotos(votosTotal)
        
    })
    
    return(
        <List>
           {
           cand.map((e)=>(
                <Card src = {url+"files/"+e.image} nome = {e.nome} porcentagem = {(100/votos)*e.qtd_votos} votos = {e.qtd_votos} numero = {e.numero} partido = {e.partido}></Card>
           ))
           }
        </List>
    )
}

export default ListCard