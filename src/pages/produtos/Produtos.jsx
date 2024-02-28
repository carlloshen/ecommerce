import Card from "../../components/card/Card";

function Produtos() {
  return (
    <>
      <section className=" w-screen mb-10 mt-5 flex justify-center ">
        <div className="w-[90vw] lg:flex lg:flex-row">
          <div className="text-center lg:hidden">
            <select
              name="categorias"
              id="categorias"
              className=" w-[250px]  pr-5 h-[48px] appearance-none text-center font-semibold text-white bg-orange-500 rounded-md"
            >
              <option value="computadores">Computadores</option>
              <option value="computadores">Celulares</option>
              <option value="computadores">Computadores</option>
            </select>
          </div>
          <div className="hidden lg:block">
            <div className="shadow-lg flex flex-col p-5 gap-5 w-[251px] text-stone-500 font-semibold">
              <div className="flex gap-2 ">
                <input type="radio" id="" name="computador" value="" checked/>
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
          <div className="flex flex-wrap items-center w-full gap-2 md:gap-5 justify-center ">
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
