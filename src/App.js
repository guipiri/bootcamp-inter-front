import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  IndexRoute,
} from "react-router-dom";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import ProdutoUnico from "./Pages/Produto.unico";
import MinhaConta from "./Pages/MinhaConta";
import Cadastro from "./Pages/Cadastro";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<ProdutoUnico />} />
          <Route path="/minhaconta" element={<MinhaConta />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
