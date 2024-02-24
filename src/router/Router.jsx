import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import Cadastro from "../pages/cadastro/Cadastro";
import MeusPedidos from "../pages/meusPedidos/MeusPedidos";
import Home from "../pages/home/Home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meusPedidos" element={<MeusPedidos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
