import "./listaprodutos.scss";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ListaProdutos = () => {
  const fecharModal = () =>{
    const modal = document.querySelector('.modal');
    modal.classList.toggle('hidden');
  }
  const abrirModal = (produto) =>{
    const modal = document.querySelector('.modal');
    modal.classList.remove('hidden');
    const nomeModal = document.querySelector('.nomeModal');
    const precoModal = document.querySelector('.precoModal');
    const imagemModal = document.querySelector('.imagemModal');
    nomeModal.textContent = produto.productName;
    precoModal.textContent = "R$ " + produto.price;
    imagemModal.src = produto.photo;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  const data = {
    success: true,
    products: [
      {
        productName: "Iphone 11 PRO MAX BRANCO 1",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 15000
      },
      {
        productName: "IPHONE 13 MINI 1",
        descriptionShort: "IPHONE 13 MINI 1",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 9000
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 2",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 2",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 14990
      },
      {
        productName: "IPHONE 13 MINI 2",
        descriptionShort: "IPHONE 13 MINI 2",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 12000
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 3",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 3",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 4550
      },
      {
        productName: "IPHONE 13 MINI 3",
        descriptionShort: "IPHONE 13 MINI 3",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 38000
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 4",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 4",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 42000
      },
      {
        productName: "IPHONE 13 MINI 4",
        descriptionShort: "IPHONE 13 MINI 4",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 520
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 5",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 5",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 149990
      },
      {
        productName: "IPHONE 13 MINI 5",
        descriptionShort: "IPHONE 13 MINI 5",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 100000
      }
    ]
  };

  return (
    <div className="product-list">
      <Slider {...settings}>
        {data.products.map((produto, index) => (
          <div key={index} className="product-item">
            <p className="produtoNome">{produto.productName}</p>
            <img src={produto.photo} alt={produto.productName} />
            <p className="precoAntigo">R${produto.price + 500}</p>
            <p className="precoAtual">R${produto.price}</p>
            <p className="parcelado"> ou 2x de R$ {produto.price / 2} sem juros</p>
            <p className="frete"> Frete grátis! </p>
            <button className="comprar" onClick={() => abrirModal(produto)}>Comprar</button>
          </div>
        ))}
      </Slider>
      <div className="modal hidden">
        <div className="conteudosModal">
        <p className="nomeModal"></p>
        <p className="precoModal"></p>
        <img className="imagemModal" src=""></img>
        <div className="botoesModal">
        <button className="fecharModal" onClick={() => fecharModal()}>Fechar</button>
        <button className="comprarModal"> Comprar</button>
        </div>
        </div>
      </div>
    </div>
  );
};
export default ListaProdutos;