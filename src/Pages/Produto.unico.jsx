import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/Home/NavBar';
import CardCompleto from '../components/Produtos/CardCompleto'

function ProdutoUnico() {

  const {id} = useParams();
  const url = `http://localhost:3000/products/${id}`

  const [prod, setProd] = useState([]);

  useEffect(async () => {
    const response = await fetch(url)
    const data = await response.json();
    setProd(data);
  }, [])
  
  prod.map((content) => {
    const produto = content;
  });

  return (
    <>
      <NavBar></NavBar>
      {prod.map((content) => {
        return(
          <CardCompleto tit={content.nome} id={id} price={content.preco} descri={content.descri} key={id} />
        )
      })}
    </>
  )
}

export default ProdutoUnico