import "./header.scss";


import ShieldCheck from "../../assets/ShieldCheck.png";
import Truck from "../../assets/Truck.png";
import CreditCard from "../../assets/CreditCard.png";
import Logo from "../../assets/vtex.png";
import Search from "../../assets/Search.png";
import Vector from "../../assets/Vector.png";
import Heart from "../../assets/Heart.png";
import ShoppingCart from "../../assets/ShoppingCart.png";
import UserCircle from "../../assets/UserCircle.png";

const Header = () =>{
    return(
        <div>
            <div className="topo">
                <div>
                    <img src={ShieldCheck} alt=""/>
                </div>
                <p>
                    Compra <span>100% segura</span>
                </p>
                    <div>
                    <img src={Truck} alt=""></img>
                    </div>
                    <p>
                        <span>
                        Entregas</span> Rápidas
                        </p>
                    <div>
                    <img src={CreditCard}></img>
                    </div>
                    <p>
                        <span>Parcele </span>
                        Suas Compras
                    </p>
                
            </div>
            <div className="containerinput">
                <div className="logo">
                    <img src={Logo}></img>
                    <input type="text" placeholder="O que você procura?"></input>
                    <button className="search">
                        <img src={Search}></img>
                    </button>
                </div>
                <div className="itens">
                <div>
                    <img src={Vector}></img>
                </div>
                <div>
                    <img src={Heart}></img>
                </div>
                <div>
                    <img src={UserCircle}></img>
                </div>
                <div>
                    <img src={ShoppingCart}></img>
                </div>
            </div>
            </div>
  
        </div>
    )
}
export default Header;