import { HiOutlineMenu } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import icone from "../../assets/images/icone-4x.png";
import InputHeader from "../inputHeader/InputHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
function Header() {
  const navigator = useNavigate()
  const {pathname} = useLocation()

  const [showMenuHamburguer, setShowMenuHamburguer] = useState(false)

  const handleShowMenuHamburguer = (state) =>{
    setShowMenuHamburguer(state)
  }

  const handleClickPageChange = (element) =>{
    const PAGE_TARGET = element.target.id
    navigator(`${PAGE_TARGET }`)
    setShowMenuHamburguer(false)
  }

  const links = [
    { id: "", text: "Home"},
    { id: "produtos", text: "Produtos" },
    { id: "categorias", text: "Categorias" },
    { id: "meuspedidos", text: "Meus Pedidos" }
  ];


  return (
    <nav className="bg-blue-900 items-center pt-5 pb-5 flex flex-col">
      <div className="flex justify-between items-center h-20 pl-5 pr-5 w-screen flex-wrap">
        <button className="md: hidden"  onClick={() =>handleShowMenuHamburguer(true)}>
          <HiOutlineMenu className="text-white text-2xl" />
        </button>
        <div className={`z-10 w-screen h-screen fixed top-0  bg-slate-100 transition-all duration-300 ease-in-out  ${showMenuHamburguer ? "left-0 " :" left-[-100vw]"}`}>
          <div className="ml-5 mr-5 mt-5">
            <button className="mb-2" onClick={() =>handleShowMenuHamburguer(false)}>
              <IoMdClose/>
            </button>
            <hr className="mb-3" />
            <nav className="flex flex-col mb-10">
              {links.map((link, index) =>(
                 <a 
                  key={index}
                  id={link.id}
                  className={`${pathname === "/" + link.id ? "text-orange-500" : "text-stone-500"} font-semibold hover:bg-slate-300 p-2 rounded-md`}
                  onClick={(link) => handleClickPageChange(link)}>{link.text}
                 </a>
              ))}
            </nav>
            <hr className="mb-3" />
            <div className="flex justify-around">
              <button id="cadastro" className="text-stone-500 font-semibold" onClick={(element) => handleClickPageChange(element)}>
                Cadastre-se
              </button>
              <button className="bg-blue-700 rounded-md text-white w-[106px] h-[30px] text-sm front-bold">
                Entrar
              </button>
            </div>
          </div>
        </div>

        <img src={icone} alt="" className=" w-[71.56px] h-[28px] object-cover " />
        <div className=" order-1 mt-3">
          <InputHeader />
        </div>
        <button>
          <FaCartShopping className="text-white text-2xl " />
        </button>
      </div>
    </nav>
  );
}

export default Header;
