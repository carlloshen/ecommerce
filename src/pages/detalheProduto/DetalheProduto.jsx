import { useState } from "react";
import smartWatt from "../../assets/images/smartWatt.png";
function DetalheProduto() {
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (operator) => {
    if (operator === "sum") {
      setQuantity((previousQuantity) => previousQuantity + 1);
    } else if (operator === "subtract" && quantity > 1) {
      setQuantity((previousQuantity) => previousQuantity - 1);
    }
  };

  return (
    <section className="w-screen flex justify-center mb-10">
      <article className="flex flex-col min-w-[330px] max-w-[450px] justify-center w-[90vw] bg-slate-100 p-6 mt-5 md:flex-row md:gap-10 md:max-w-[1000px] rounded-md shadow-lg">
        <div className="md:w-[30vw]  md:min-w-[200px] max-w-[350px]  flex flex-col shrink-0">
          <img src={smartWatt} alt="" className="rounded-md object-contain" />
          <p className=" hidden md:block text-blue-900 text-xl font-semibold mt-10 md:mt-5">Quantidade disponível</p>
          <p className="hidden md:block text-stone-500 text-lg font-medium mt-1">100 itens disponíveis</p>
        </div>
        <div className="flex flex-col justify-center ">
            <h2 className="text-2xl text-blue-900 font-semibold mt-2 md:text-2xl ">Smart Watt</h2>
            <p className="text-base text-stone-500 font-medium mt-2 mb-5 md:mt-3 md:text-xl">Categoria</p>
          <div className="h-[100px] md:h-[150px] overflow-y-scroll mb-7">
            <p className="text-sm font-medium text-stone-500  md:text-lg">
              O smartwatch é o seu companheiro ideal para uma vida mais saudável, conectada e cheia de estilo. Com ele,
              você recebe notificações do seu smartphone, monitora sua saúde (batimentos cardíacos, pressão arterial,
              oxigênio no sangue e qualidade do sono), acompanha seus treinos com diversos recursos e ainda desfruta de
              um design elegante e moderno com diversas pulseiras intercambiáveis.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:mt-5 gap-5">
            <div className="mt-5 flex items-center md:flex-col">
              <p className="text-base font-semibold text-black mr-3 md:text-xl">Quantidade:</p>
              <div>
                <button
                  className={`mr-2  text-xl md:text-xl ${
                    quantity === 1 ? "cursor-not-allowed text-stone-500" : "cursor-pointer"
                  }`}
                  disabled={quantity === 1 ? true : false}
                  onClick={() => handleChangeQuantity("subtract")}
                >
                  -
                </button>

                <span className="mr-2 font-semibold md:text-xl select-none"> {quantity} </span>
                <button className="mr-2 cursor-pointer text-xl" onClick={() => handleChangeQuantity("sum")}>
                  +
                </button>
              </div>
            </div>
            <button className=" bg-blue-900 text-white h-[40px] max-w-[370px]  font-semibold rounded-md hover:bg-blue-950 mt-5 md:items-center md:mt-6 md:text-2xl md:w-[16vw] md:max-w-[180px] md:h-[50px]">
              Comprar
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default DetalheProduto;
