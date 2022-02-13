import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Cards({img, tit, price}) {
  const preco = price.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
  const parc = (price /10).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});

  const foto = require("../../img/id_produto_"+img+".jpg");
  const link = "/produto"+img

  return (   
    <Card>
        <Link style={{color: 'black', textDecoration: 'none'}} to={link}>
        <Card.Img variant="top" src={foto}/>
        <Card.Body>
          <Card.Title>{tit}</Card.Title>
          <h3> {preco}.</h3>
          <Card.Text>
            10x de {parc} sem juros no cartão de crédito
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small style={{color: 'green', alignItems: 'end' }}>Frete Grátis</small>
        </Card.Footer>
        </Link>
    </Card>
  );
}

export default Cards;
