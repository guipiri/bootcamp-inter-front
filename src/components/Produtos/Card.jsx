import React from 'react';
import {Card, Button} from 'react-bootstrap';


function Cards({tit, img, price}) {
  const preco = price.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
  const parc = (price /10).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});

  const foto = require("../../img/id_produto_"+img+".jpg")

  return(
    <>
      <Card style={{ width: '18rem', margin: '5px' }}>
        <Card.Img variant="top" src={foto} />
        <Card.Body  >
          <Card.Title style={{ fontSize:'16px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }} >{tit}</Card.Title>
          <h3 style={{fontSize:'22px'}} > {preco}.</h3>
          <Card.Text>
            10x de {parc} sem juros no cartão de crédito
          </Card.Text>
          <Button style={{alignSelf:'end'}} variant="primary">Ver produto</Button>
          <p style={{color: 'green', alignItems: 'end', margin:'5px' }}>Frete Grátis</p>
        </Card.Body>
      </Card>         
    </>
  );
}

export default Cards;
