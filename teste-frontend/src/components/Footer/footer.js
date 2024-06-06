import Formas_Pagamento from "../../assets/Formas_Pagamento.png";
const Footer = () => {
    return (<div className="sobrenos">
        <div className="bold">
            <div className="aboutus">
                <h3>Sobre Nós</h3>
                <a href="#"><p> Conheça</p></a>
                <a href="#"><p> Como comprar </p></a>
                <a href="#"><p> Indicação e desconto</p></a>
            </div>
            <div className="aboutus">
                <h3>Informações Úteis</h3>
                <a href="#"><p> Fale Conosco</p></a>
                <a href="#"><p> Dúvidas </p></a>
                <a href="#"><p> Prazos de Entrega</p></a>
                <a href="#"><p> Formas de Pagamento</p></a>
                <a href="#"><p> Política de Privacidade </p></a>
                <a href="#"><p> Trocas e Devoluções</p></a>
            </div>
            <div className="aboutus">
                <h3>Formas de Pagamento</h3>
                <img src={Formas_Pagamento}></img>
            </div>
        </div>
    </div>
)
}
export default Footer;