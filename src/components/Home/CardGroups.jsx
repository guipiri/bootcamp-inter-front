import React, {useEffect, useState} from 'react';
import Cards from '../Produtos/Card';
import { api } from '../../Api';
import {Link} from "react-router-dom";

function CardGroups() {
  const [array, setArray] = useState([]);

  useEffect(async() => {
    const lista = await api.get("/products");
    const dados  = await lista.data

    let a = [];
    for (let i = 0; i < 4; i++) {
      a.push(dados[Math.round(Math.random()*(dados.length-1))])
    }  
    setArray(a)
  }, [])

  return(
    <div style={{display: 'flex',flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center', margin: '10px'}}>
      {array.map((content) =>{
        const url = `/produtos/${content.id_produto}`
        return(
          <Link style={{textDecoration:'none', color:'black'}} to={url} key={content.id_produto}>
            <Cards tit={content.nome} img={content.id_produto} price={content.preco} />
          </Link>
        )
      })}
    </div>)   
} 

export default CardGroups;
