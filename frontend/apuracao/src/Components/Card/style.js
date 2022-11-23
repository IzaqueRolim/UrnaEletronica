import styled from "styled-components";

export const Kart = styled.div`
    width:430px;
    height:30vh;
    padding:10px 20px 0 20px;
    background-color:white;
    border-radius:10px;
    img{
        object-fit: contain;
        width:100px;
        height:100px;
        border-radius:100px;
    }
    .div1{
        display:flex;
        justify-content:space-between;
        align-items:center;
        div{
            display:flex;
            flex-direction:column;
            justify-content:start;
        }
    }
    .porcentagem{
        font-size:35px;
        color:#8B72AF
    }
    .div2{
        margin-top:3vh;
        display:flex;
        flex-direction:column;
        align-items:start;
        .nome{
            font-size:30px;
            font-weight:bold;
        }
    }
`