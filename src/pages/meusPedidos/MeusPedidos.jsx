import { Link } from "react-router-dom";
import imagemItem from "../../assets/images/tenis.png";

function MeusPedidos() {
  return (
    <section className=" w-screen mb-10 mt-5 flex justify-center ">
      <div className="w-[90vw] flex flex-col items-center md:items-start md:flex-row">
        <div class="text-center flex relative md:hidden max-w-[250px] mb-5">
          <select
            name="categorias"
            id="categorias"
            class="w-[250px] pr-10 h-[48px] appearance-none text-center font-semibold text-white bg-orange-500 rounded-md"
          >
            <option value="computadores">Meus Pedidos</option>
            <option value="computadores">Minhas Informações</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#FFFF"
            class="absolute right-2 top-0 bottom-0 m-auto"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        <div className="p-5 bg-slate-100 rounded-md  gap-3 hidden md:flex flex-col justify-center mr-5 w-[251px] h-[134px]">
          <Link className="text-stone-500 font-semibold">Meus Pedidos</Link>
          <hr className=" bg-slate-500" />
          <Link className="text-stone-500 font-semibold">Minhas Informações</Link>
        </div>
        <div className=" p-5 rounded-md bg-slate-100 md:w-full">
          <div className="flex justify-between">
            <h2 className="text-base font-semibold">Meus Pedidos</h2>
            <h3 className="text-stone-500 font-normal hidden md:block">Status Meus Pedidos</h3>
          </div>
          <div className="p-4 md:flex md:items-center md:justify-between">
            <div className="flex mb-5">
              <div className="w-20 mr-5">
                <img src={imagemItem} alt="" className="rounded-md object-cover" />
              </div>
              <div>
                <p className="font-semibold text-sm">Nique Air Surf</p>
                <p className="font-semibold text-stone-500 text-[10px] mb-3">Categoria</p>
                <p className="font-semibold text-xs">R$ 220,00</p>
                <p className="font-semibold text-stone-500 text-xs">Qtd: 02</p>
              </div>
            </div>
            <div className="flex justify-between md:items-end">
              <p className="text-base text-stone-500 md:hidden">Status:</p>
              <p className="font-semibold text-green-700">Finalizado</p>
            </div>
          </div>
          <hr className=" bg-stone-900" />
        </div>
      </div>
    </section>
  );
}

export default MeusPedidos;
