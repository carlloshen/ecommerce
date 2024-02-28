function Produtos() {
  return (
    <>
      <section className=" w-screen mb-10 mt-5 flex justify-center ">
        <div className="w-[90vw]">
          <div className="text-center lg:hidden">
            <select name="categorias" id="categorias"  className=" w-[250px]  pr-5 h-[48px] appearance-none text-center font-semibold text-white bg-orange-500 rounded-md">
              <option value="computadores" >Computadores</option>
              <option value="computadores">Celulares</option>
              <option value="computadores">Computadores</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
}

export default Produtos;
