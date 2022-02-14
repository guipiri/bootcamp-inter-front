import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/Home/NavBar';
import CardCompleto from '../components/Produtos/CardCompleto'
import { api } from '../Api';


function ProdutoUnico() {

  const {id} = useParams();
  const url = `/products/${id}`

  const [prod, setProd] = useState([]);

  useEffect(async () => {
    const response = await api.get(url)
    const data = await response.data;
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