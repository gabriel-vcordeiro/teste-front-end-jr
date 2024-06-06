import "./navbar.scss";

import CrownSimple from "../../assets/CrownSimple.png";


const Navbar = () => {
    return (
        <div>
           <div className="navbar">
            <a href="#"> Todas as Categorias</a>
            <a href="#"> Supermercado</a>
            <a href="#"> Livros </a>
            <a href="#"> Moda</a>
            <a href="#"> Lançamentos</a>
            <a href="#"> <span> Ofertas do Dia</span></a>
            <a href="#"> <img src={CrownSimple}></img> Assinatura</a>
           </div>
        </div>)
}

export default Navbar;