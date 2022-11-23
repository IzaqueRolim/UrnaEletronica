import { NavBar } from "./style";

function Header(){
    return(
        <NavBar>
            <div>
                <select class="select">
                    <option value="1">Seção 1</option>
                    <option value="2">Seção 2</option>
                </select>
            </div>
            <input type="search" placeholder="Pesquisar"></input>
        </NavBar>
    )
}

export default Header