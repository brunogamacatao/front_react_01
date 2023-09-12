import { useState } from "react";

function App() {
  let produtos = [
   {id: 0, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
   {id: 1, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
   {id: 2, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
   {id: 0, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
   {id: 1, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
   {id: 2, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
   {id: 0, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
   {id: 1, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
   {id: 2, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
   {id: 0, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
   {id: 1, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
   {id: 2, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
   {id: 0, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
   {id: 1, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
   {id: 2, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
   {id: 0, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
   {id: 1, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
   {id: 2, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
   {id: 0, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
   {id: 1, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
   {id: 2, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
  ];

  const [total, setTotal] = useState(0);
  const [carrinho, setCarrinho] = useState([]);

  const comprar = (p) => {
    setTotal(total + p.preco);
    setCarrinho([...carrinho, p]);
  };

  const renderProduto = (p) => {
    return (
     <li className="produto">
      <img src={p.foto}/>
      {p.nome} - R$ {p.preco}
      <br/>
      <button onClick={()=>comprar(p)}>Comprar</button>
     </li>
    );
  };

  const renderItemCarrinho = (p) => {
    return (
     <li>
      {p.nome} - R$ {p.preco}
     </li>
    );
  };


  return (
    <>
      <h3>Lista de Produtos:</h3>
      <ul className="listaDeProdutos">
        {produtos.map(renderProduto)}
      </ul>
      <hr/>
      <h3>Produtos no Carrinho:</h3>
      <ol>
        {carrinho.map(renderItemCarrinho)}
      </ol>
      <h3>Total: R$ {total}</h3>
    </>
  );
}

export default App;
