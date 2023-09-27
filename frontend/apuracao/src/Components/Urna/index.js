import './style.css'
import {useState} from "react"

function Urna(){

    const [numVotacao,setNumVotacao] = useState("");
    const [dadosCandidatos,setDadosCandidatos] = useState({});

    const [exibirDiv1Right,setExibirDiv1Right] = useState(false);
    const [exibirDiv1Left,setExibirDiv1Left] = useState(true);
    const [exibirDiv1,setExibitDiv1] = useState(false);
    const [exibirDiv2,setExibitDiv2] = useState(false);
    const [exibirVotoBranco,setExibirVotoBranco] = useState(false);


    return(
        <div class = "container-urna">
            <div class = "urna">
                <div class = "tela">
                    <div class = "d1">
                        {exibirDiv1Left?
                            <div class = "d1-left">
                                <div class = "d1-1">
                                    <span>SEU VOTO PARA</span>
                                </div>
                                <div class = "d1-2">
                                    <span>PRESIDENTE</span>
                                </div>
                                <div class = "d1-3">
                                    <span class = "numero"></span>
                                    <span class = "numero"> </span>
                                </div>
                                {exibirDiv1?
                                    <div class = "d1-4">
                                        <span class = "name">Nome:FULANO DE TAL</span><br/>
                                        <span class = "partido">Partido:000</span><br/>
                                        <span class = "vice">Vice-Prefeito:BELTRANO DE TAL</span>
                                    </div>
                                :
                                    <></>}
                                
                            </div>
                        :
                            <></>
                        }

                        {exibirDiv1Right? 
                             <div class = "d1-right">
                                <img class = "normal"src = "./Imagens/Simone.jpg" alt = "presidente"/>
                                <span>Presidente</span>
                                <img class = "small" src = "./Imagens/Vice Simone.jpg" alt = "vice-presidente"/>
                                <span>Vice-Presidente</span>
                            </div>
                        :
                            <></>}
                       
                        {exibirVotoBranco?
                             <div class = "voto-branco">
                                <div class = "d1-1">
                                    <span>SEU VOTO PARA</span>
                                </div>
                                <div class = "d1-2">
                                    <span>PRESIDENTE</span>
                                </div>
                                <div class = "d1-3">
                                    <span>VOTO EM BRANCO</span>
                                </div>
                            </div>
                        :
                            <></>}
                       
                    </div>
                
                    {exibirDiv2?
                        <div class = "d2">
                            Aperte a tecla<br/>
                            CONFIRMA para CONFIRMAR seu voto<br/>
                            CORRIGE para REINICIAR seu voto
                        </div>
                    :
                    <></>}
                    
                </div>
                <div class = "teclado">
                    <div class="teclado-linha">
                        <div class = "teclado-botao" value = "1">1</div>
                        <div class = "teclado-botao" value = "2">2</div>
                        <div class = "teclado-botao" value = "3">3</div>
                    </div>
                    <div class="teclado-linha">
                        <div class = "teclado-botao" value = "4">4</div>
                        <div class = "teclado-botao" value = "5">5</div>
                        <div class = "teclado-botao" value = "6">6</div>
                    </div>
                    <div class="teclado-linha">
                        <div class = "teclado-botao" value = "7">7</div>
                        <div class = "teclado-botao" value = "8">8</div>
                        <div class = "teclado-botao" value = "9">9</div>
                    </div>
                    <div class="teclado-linha">
                        <div class = "teclado-botao" value = "0">0</div>
                    </div>
                    <div class="teclado-linha">
                        <div class = "teclado-botao botao-branco" value = "BRANCO">BRANCO</div>
                        <div class = "teclado-botao botao-corrige" value = "CORRIGE">CORRIGE</div>
                        <div class = "teclado-botao botao-confirma"value = "CONFIRMA">CONFIRMA</div>
                    </div>
                </div>

            </div>
            <label for="">Selecione a secao</label>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    )
}

export default Urna