import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import LoginECadastro from "../pages/loginECadastro/LoginECadastro";
import MeusPedidos from "../pages/meusPedidos/MeusPedidos";
import Home from "../pages/home/Home";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginECadastro />} />
        <Route path="/cadastro" element={<LoginECadastro />} />
        <Route path="/produtos" element="produtos" />
        <Route path="/categorias" element="categorias" />
        <Route path="/meusPedidos" element={<MeusPedidos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
