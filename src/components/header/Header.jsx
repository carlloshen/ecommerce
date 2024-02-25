import { HiOutlineMenu } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import icone from "../../assets/images/icone-4x.png";
import InputHeader from "../inputHeader/InputHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
// ! consertar isso
function ButtonsLoginRegister({ handleClickPageChange }) {
  return (
    <div className="flex justify-center">
      <button
        id="cadastro"
        className="text-stone-500 font-semibold hover:bg-slate-300 md:hover:bg-transparent pl-3 pr-3 h-[30px] rounded-md md:text-white"
        onClick={(element) => handleClickPageChange(element)}
      >
        Cadastre-se
      </button>
      <button
        id="login"
        className="bg-blue-700 rounded-md text-white w-[106px] h-[30px] text-sm front-bold hover:bg-blue-900 md:hover:bg-orange-500 md:bg-orange-500"
        onClick={(element) => handleClickPageChange(element)}
      >
        Entrar
      </button>
    </div>
  );
}

function Header() {
  const navigator = useNavigate();
  const { pathname } = useLocation();

  const [showMenuHamburguer, setShowMenuHamburguer] = useState(false);

  const handleShowMenuHamburguer = (state) => {
    setShowMenuHamburguer(state);
  };

  const handleClickPageChange = (element) => {
    const PAGE_TARGET = element.target.id;
    navigator(`${PAGE_TARGET}`);
    setShowMenuHamburguer(false);
  };

  const links = [
    { id: "", text: "Home" },
    { id: "produtos", text: "Produtos" },
    { id: "categorias", text: "Categorias" },
    { id: "meuspedidos", text: "Meus Pedidos" },
  ];

  return (
    <header className="bg-blue-900 items-center pt-5 pb-5 flex flex-col ">
      <div className="flex justify-between  items-center h-20 pl-5 pr-5 w-screen flex-wrap">

        <button className="md:hidden" onClick={() => handleShowMenuHamburguer(true)}>
          <HiOutlineMenu className="text-white text-2xl" />
        </button>

        <div
          className={`z-10 w-screen h-screen fixed top-0  bg-slate-100 transition-all duration-300 ease-in-out  ${
            showMenuHamburguer ? "left-0 " : " left-[-100vw]"
          }`}>
          <div className="ml-5 mr-5 mt-5">
            <button className="mb-2" onClick={() => handleShowMenuHamburguer(false)}>
              <IoMdClose />
            </button>
            <hr className="mb-3" />
            <nav className="flex flex-col mb-10">
              {links.map((link, index) => (
                <a
                  key={index}
                  id={link.id}
                  className={`${
                    pathname === "/" + link.id ? "text-orange-500" : "text-stone-500"
                  } font-semibold hover:bg-slate-300 p-2 rounded-md cursor-pointer`}
                  onClick={(link) => handleClickPageChange(link)}
                >
                  {link.text}
                </a>
              ))}
            </nav>
            <hr className="mb-3" />
            <ButtonsLoginRegister handleClickPageChange={handleClickPageChange} />
          </div>
        </div>
        <div className="sm:justify-center md:flex-1">
        <img src={icone} alt="" className=" w-[71.56px] h-[28px] object-cover " />
        </div>
        <div className=" order-1 mt-3 grow md:order-0 md:grow md:flex-1">
          <InputHeader />
        </div>
        <div className="md:order-1 flex-1">
          <div className="hidden md:block">
            <ButtonsLoginRegister handleClickPageChange={handleClickPageChange} />
          </div>
        </div>
        <button className="md:order-1 ">
          <FaCartShopping className="text-white text-2xl" />
        </button>

      </div>
    </header>
  );
}

export default Header;
