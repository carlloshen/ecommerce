import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import LoginECadastro from "../pages/loginECadastro/LoginECadastro";
import MeusPedidos from "../pages/meusPedidos/MeusPedidos";
import Categorias from "../pages/categorias/Categorias"
import Home from "../pages/home/Home";
import DetalheProduto from "../pages/detalheProduto/DetalheProduto";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginECadastro />} />
        <Route path="/cadastro" element={<LoginECadastro />} />
        <Route path="/produtos" element="produtos" />
        <Route path="/produtos/:id" element={<DetalheProduto/>} />
        <Route path="/categorias" element={<Categorias/>} />
        <Route path="/meusPedidos" element={<MeusPedidos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
