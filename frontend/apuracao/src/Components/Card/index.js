import { Kart } from "./style";

function Card({src,nome,porcentagem,votos,partido,numero}){
    return(
        <Kart>
            <div className = "div1">
                <img src={src} />
                <div>
                    <span className="porcentagem">{parseFloat(porcentagem.toFixed(2))}%</span>
                    <span>{votos} votos</span>
                </div>
            </div>
            <div className="div2">
                <span>{partido}-{numero}</span>
                <span className="nome">{nome}</span>
            </div>
        </Kart>
    )
}

export default Card