import { HiOutlineMenu } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import icone from "../../assets/images/icone-4x.png";
import InputHeader from "../inputHeader/InputHeader";
function Header() {
  return (
    <nav className="bg-blue-900 items-center pt-5 pb-5 flex flex-col">
      <div className="flex justify-between items-center h-20 pl-5 pr-5 w-screen flex-wrap">
        <button className="peer">
          <HiOutlineMenu className="text-white text-2xl" />
        </button>
        {/*  left-[-100vw] bg-slate-100 peer-focus:left-0 transition-all duration-300 ease-in-out */}
        <div className="z-10 w-screen h-screen fixed top-0  bg-slate-100 left-[-100vw] peer-focus:left-0 transition-all duration-300 ease-in-out">
          <div className="ml-5 mr-5 mt-10">
            <hr className="mb-3" />
            <nav className="flex flex-col mb-3">
              <a className="text-stone-500 hover:bg-slate-300 p-2 rounded-md">Home</a>
              <a className="text-stone-500 hover:bg-slate-300 p-2 rounded-md">Produtos</a>
              <a className="text-stone-500 hover:bg-slate-300 p-2 rounded-md">Categorias</a>
              <a className="text-stone-500 hover:bg-slate-300 p-2 rounded-md">Meus Pedidos</a>
            </nav>
            <hr className="mb-3 " />
            <div className="flex justify-around">
              <button className="text-stone-500 font-semibold ">Cadastre-se</button>
              <button className="bg-blue-700 rounded-md text-white w-[106px] h-[30px] text-sm front-bold">
                Entrar
              </button>
            </div>
          </div>
        </div>

        <div className="order-1">
          <InputHeader />
        </div>
        <img src={icone} alt="" className=" w-[71.56px] h-[28px] object-cover " />
        <button>
          <FaCartShopping className="text-white text-2xl " />
        </button>
      </div>
    </nav>
  );
}

export default Header;
