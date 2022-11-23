const candidatos = [
    {
      numero:"22",
      nome:"Bolsonaro",
      vice:"Braga Neto",
      partido:"PL",
      foto: "./Imagens/Bolsonaro.jpg",
      fotoVice:"./Imagens/BragaNeto.jpg"
    },
    {
        numero:"13",
        nome:"Lula",
        vice:"Alckimin",
        partido:"PT",
        foto: "./Imagens/Lula.jpg",
        fotoVice:"./Imagens/alckmin.jpg"
      },
      {
        numero:"15",
        nome:"Simone Tebet",
        vice:"Mara Gabrilli",
        partido:"PSDB",
        foto: "./Imagens/Simone.jpg",
        fotoVice:"./Imagens/Vice Simone.jpg"
      },
      {
        numero:"12",
        nome:"Ciro Gomes",
        vice:"Ana Paula",
        partido:"PDT",
        foto: "./Imagens/Ciro.jpg",
        fotoVice:"./Imagens/Ana Paula.jpeg"
      },
      {
        numero:"44",
        nome:"Soraya Thronicke",
        vice:"Marcos Cintra",
        partido:"UNIAO BRASIL",
        foto: "./Imagens/Soraya.jpg",
        fotoVice:"./Imagens/Marcos Cintra.jpg"
      },
      {
        numero:"14",
        nome:"Padre Kelmon",
        vice:"Pastor Gamonal",
        partido:"PTB",
        foto: "./Imagens/Kelmon.jpeg",
        fotoVice:"./Imagens/Gamonal.jpg"
      }
]
let dadosCandidatos 

let numVotacao = ""
let cont = 0

const div1_right    = document.querySelector(".d1-right")
const div1_left     = document.querySelector(".d1-left")
const div1          = document.querySelector(".d1-4")
const div2          = document.querySelector(".d2")
const branco        = document.querySelector(".voto-branco");

const imgPresidente = document.querySelector(".normal")
const imgVice       = document.querySelector(".small")


branco.classList.add("oculto")

const numeros   = document.getElementsByClassName("numero")
const btn       = document.getElementsByClassName("teclado-botao")

limparTela()

//interacoes dos botoes
Array.from(document.getElementsByClassName("teclado-botao")).forEach(
    function(element, index, array) {
       element.addEventListener("click",(e)=>{
            if(e.target.getAttribute('value')=="CONFIRMA"){
                data = {
                  "numero":parseInt(numVotacao)
                }
                cont = 0
                numVotacao = ""
                PostApi(data)
                limparTela()
            }
            else if(e.target.getAttribute('value')=="CORRIGE"){
                cont = 0;
                numVotacao = ""
                limparTela()
            }
            else if(e.target.getAttribute('value')=="BRANCO"){
                div1_right.classList.add("oculto")
                div1_left.classList.add("oculto")
                div2.classList.remove("oculto")
                branco.classList.remove("oculto")
            }   
            else{
                numVotacao += e.target.getAttribute('value')
                numeros[cont].textContent = e.target.getAttribute('value')
                cont++

                if(cont == numeros.length){
                    div1.classList.remove("oculto")
                    div1_right.classList.remove("oculto")
                    div2.classList.remove("oculto")

                    dadosCandidatos.forEach((e)=>{
                        if(e.numero == numVotacao){
                            div1_right.children[0].src = "http://localhost:5050/files/"+e.image
                            div1_right.children[1].textContent = e.nome
                            div1_right.children[2].src = "http://localhost:5050/files/"+e.image_vice
                            div1_right.children[3].textContent = e.vice
                            div1.children[0].textContent = `Nome: ${e.nome}`
                            div1.children[2].textContent = `Partido: ${e.partido}`
                            div1.children[4].textContent = `Vice: ${e.vice}`
                           // GetApi(e.nome)
                        }
                    })
                }
            }
       })
    }
)

function limparTela(){
    div1.classList.add("oculto")
    div1_right.classList.add("oculto")
    div1_left.classList.remove("oculto")
    div2.classList.add("oculto")
    branco.classList.add("oculto")
    for(i = 0;i<numeros.length;i++){
        numeros[i].textContent = ""
    }
}


async function PostApi(data) {
  let body = await fetch(`http://localhost:5050/patch`,{
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
        })

  let json = await body.json();

  console.log(json)  
}

async function GetApi(end){
  let body = await fetch(`http://localhost:5050/${end}`,{
    headers: {
    'Content-Type': 'application/json',
    }
  })
  let json = await body.json();

  dadosCandidatos = json

  console.log(dadosCandidatos)
  
}

GetApi(1)