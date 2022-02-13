import React from 'react';
import {Card, Button} from 'react-bootstrap';


function Cards({tit, id, price, descri}) {
  const preco = price.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
  const parc = (price /10).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});

  const foto = require("../../img/id_produto_"+id+".jpg")

  return(
    <>
      <div style={{ display: 'flex', margin: '10px', margin:'100px' }}>
        <Card.Img variant="top" src={foto} style={{maxWidth: '500px'}} />
        <Card.Body style={{display: 'flex', flexDirection:'column', justifyContent:'space-around', width:'100px' }} >
          <Card.Title>{tit}</Card.Title>
          <p style={{margin:'30px 0px'}} >{descri}</p>
          <h3> {preco}.</h3>
          <Card.Text>
            10x de {parc} sem juros no cartão de crédito
            <p style={{color: 'green', alignItems: 'end' }}>Frete Grátis</p>
          </Card.Text>
          <Button style={{alignSelf:'flex-start'}} variant="primary">Adicionar ao carrinho</Button>
        </Card.Body>
      </div>         
    </>
  );
}

export default Cards;
