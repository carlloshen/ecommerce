import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import Cadastro from "../pages/cadastro/Cadastro";
import MeusPedidos from "../pages/meusPedidos/MeusPedidos";
import Home from "../pages/home/Home";


function Router() {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/meusPedidos" element={<MeusPedidos/>}/>
    <Route path="/cadastro" element={<Cadastro/>}/>
    <Route path="*" element={<NotFound/>} />
  </Routes>
  );
}

export default Router;