import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Home/NavBar';
import Cards from '../components/Produtos/Card';

function Produtos() {
  const [prods, setProds] = useState([]);

  useEffect(async () => {
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json();
    setProds(data);
  }, [])

  return (
    <div>
      <NavBar/>
      <h1 style={{display: 'flex', justifyContent: 'center'}} >Todos os Produtos</h1>
      <div style={{display: 'flex',flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center', margin: '10px'}}>
        {prods.map((content) => {
          const url = `/produtos/${content.id_produto}`
          return(
            <Link style={{textDecoration:'none', color:'black'}} to={url} key={content.id_produto}>
              <Cards tit={content.nome} img={content.id_produto} price={content.preco} key={content.id_produto}/>
            </Link>

          )
        })}  
      </div>
    </div>
  );
}

export default Produtos;
