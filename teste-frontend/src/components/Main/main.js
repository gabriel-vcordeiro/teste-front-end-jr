import "./main.scss";
import ListaProdutos from "../ListaProdutos/ListaProdutos";

import vtex from "../../assets/vtex.png";
import Tecnologia from "../../assets/Tecnologia.png";
import Bebidas from "../../assets/Bebidas.png";
import EsporteFitness from "../../assets/EsporteFitness.png";
import Supermercado from "../../assets/Supermercado.png";
import Moda from "../../assets/Moda.png";
import Saude from "../../assets/Saude.png";
import Ferramentas from "../../assets/Ferramentas.png";




const Main = () => {
    return (
        <div>
            <div className="imagemOff">
                <div className="texto">
                    <div>
                        <h1> Venha Conhecer nossas promoções!</h1>
                    </div>
                    <div>
                        <h2> 50% off nos produtos.</h2>
                    </div>
                    <button> Ver produtos</button>
                </div>
            </div>
            <div className="produtoscategoria">
                <div>
                    <img src={Tecnologia}></img> <p> Tecnologia</p>
                </div>
                <div>
                    <img src={Supermercado}></img> <p> Supermercados</p>
                </div>
                <div>
                    <img src={Bebidas}></img> <p> Bebidas</p>
                </div>
                <div>
                    <img src={Ferramentas}></img> <p> Ferramentas</p>
                </div>
                <div>
                    <img src={Saude}></img> <p> Saúde</p>
                </div>
                <div>
                    <img src={EsporteFitness} /> <p> Esporte e Fitness</p>
                </div>
                <div>
                    <img src={Moda}></img> <p> Moda</p>
                </div>

            </div>
            <div className="produtosrelacionados">
                <h1> Produtos Relacionados</h1>
                <a>Celular</a>
                <a>Acessórios</a>
                <a>Tablets</a>
                <a>Notebooks</a>
                <a>TVs</a>
                <a>Ver todos</a>
            </div>
            <ListaProdutos />
            <div className="parceiroscontainer">
                <div className="parceiros">
                    <div className="textoparceiros">
                        <h1> Parceiros</h1>
                        <p> Lorem ipsum dolor sit amet</p>
                        <button> Confira</button>
                    </div>
                </div>
                <div className="parceiros">
                    <div className="textoparceiros">
                        <h1> Parceiros</h1>
                        <p> Lorem ipsum dolor sit amet</p>
                        <button> Confira</button>
                    </div>

                </div>
            </div>
            <div className="relacionados">
                <h3>Produtos relacionados</h3>
                <p> Ver todos</p>
            </div>
            <div className="parceiroscontainer">
                <div className="parceiros">
                    <div className="textoparceiros">
                        <h1> Parceiros</h1>
                        <p> Lorem ipsum dolor sit amet</p>
                        <button> Confira</button>
                    </div>
                </div>
                <div className="parceiros">
                    <div className="textoparceiros">
                        <h1> Parceiros</h1>
                        <p> Lorem ipsum dolor sit amet</p>
                        <button> Confira</button>
                    </div>

                </div>
            </div>
            <div className="relacionados">
                <h3>Navegue por marcas</h3>
            </div>
            <div className="marcas">
                <div className="itemMarcas"><img src={vtex}></img></div>
                <div className="itemMarcas"><img src={vtex}></img></div>
                <div className="itemMarcas"><img src={vtex}></img></div>
                <div className="itemMarcas"><img src={vtex}></img></div>

            </div>
        </div>
    )
}
export default Main;