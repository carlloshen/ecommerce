import { FaCartShopping as CarrinhoDeCompras } from "react-icons/fa6";
import imagemItem from "../../assets/images/tenis.png";
import { useState } from "react";
function Carrinho() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const handleShoppingCart = () => {
    setShowShoppingCart((previousState) => !previousState);
  };

  const teste = () =>{
    console.log("teste")
  }

  return (
    <section className="relative">
      <button className=" text-white text-2xl" onClick={() => handleShoppingCart()}>
        <CarrinhoDeCompras className="cursor-pointer" />
      </button>
      <div
        className={`absolute right-0 mt-3 transition-all duration-300 ease-in-out  ${
          showShoppingCart ? "block" : "hidden"
        }  z-10 `}
      >
        <div className={`w-[264px] min-h-[349px] p-4 bg-slate-100 rounded-md relative border shadow-2xl `}>
          <h2 className="font-semibold text-base mb-2">Meu Carrinho</h2>
          <hr className="mb-3 border-stone-500" />
          <div className="overflow-y-scroll max-h-[200px]">
            <div className="flex mb-5 ">
              <div className="w-20 mr-3">
                <img src={imagemItem} alt="" className="rounded-md object-cover" />
              </div>
              <div>
                <p className="font-semibold text-sm">Nique Air Surf</p>
                <p className="font-semibold text-stone-500 text-[10px] mb-3">Categoria</p>
                <p className="font-semibold text-xs">R$ 220,00</p>
                <p className="font-semibold text-stone-500 text-xs">Qtd: 02</p>
              </div>
            </div>
          </div>

          <hr className="mb-3 border-stone-500" />

          <div className="flex mb-10 justify-between mt-3">
            <p className="font-semibold text-base mr-5">Valor total:</p>
            <span className="font-semibold text-blue-900">R$ 440,00</span>
          </div>

          <div className="flex justify-between absolute bottom-4 left-4 right-4 ">
            <button className="text-stone-500 text-[10px]" onClick={() => teste()}>Esvaziar</button>
            <button className="rounded-md text-white text-sm font-bold h-6 w-[130px] bg-blue-900 text-[10px]" onClick={() => teste()}>
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrinho;
