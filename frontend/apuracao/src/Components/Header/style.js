import styled from "styled-components"

export const NavBar = styled.nav`
    width:100%;
    height:10vh;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    background-color:#BDAED1;
    
    select,option{
        border-style:none;
        background-color:rgba(255,255,255,0);
        color:#59358C;
        font-size:23px;
        font-weight:bold;
    }
    input{
        background-color:#59358D;
        color:white;
        border-style:none;
        border-radius:5px;
        height:5vh;
        width:15vw;
        padding-left:10px;
    }
    input::placeholder{
        color:white;
    }
`