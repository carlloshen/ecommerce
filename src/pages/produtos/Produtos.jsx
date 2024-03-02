import Card from "../../components/card/Card";

function Produtos() {
  return (
    <>
      <section className=" w-screen mb-10 mt-5 flex justify-center">
        <div className="w-[90vw] flex flex-col  lg:flex-row justify-center items-center lg:items-start">
          <div className="text-center flex lg:hidden relative max-w-[250px] ">
            <select
              name="categorias"
              id="categorias"
              className=" w-[250px]  pr-5 h-[48px] appearance-none text-center font-semibold text-white bg-orange-500 rounded-md "
            >
              <option value="computadores">Computadores</option>
              <option value="computadores">Celulares</option>
              <option value="computadores">Computadores</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#FFFF"
              className="absolute right-2 top-0 bottom-0 m-auto"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
          <div className="hidden lg:block border border-stone-200 shadow-lg mt-2 rounded-md">
            <div className=" flex flex-col p-5 gap-5 w-[251px] text-stone-500 font-semibold">
              <div className="flex gap-2 ">
                <input type="radio" id="" name="computador" value="" />
                <label htmlFor="computador"> Computador</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" id="" name="computador" value="" />
                <label htmlFor="computador"> Computador</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" id="" name="computador" value="" />
                <label htmlFor="computador"> Computador</label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center w-full gap-2 md:gap-5 justify-center lg:justify-start ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default Produtos;
