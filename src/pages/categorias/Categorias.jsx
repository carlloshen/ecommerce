import image from "../../assets/images/tenis.png";
function CategoryCard({categoryName}) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 bg-slate-100  h-[96px] rounded-md pl-3 shadow-md">
      <div className="col-span-1 flex justify-center items-center">
        <img src={image} alt="" className=" w-[82px] h-[81px] rounded-md shadow-xl" />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <p className="text-xl font-semibold">{categoryName}</p>
      </div>
    </div>
  );
}

function Categorias() {
  return (
    <section className=" w-screen mb-20 mt-20 flex justify-center">
      <div className="w-[90vw]">
        <div className="flex flex-wrap items-center w-full gap-4 md:gap-5 justify-center ">
          <CategoryCard categoryName={"Computadores"} />
          <CategoryCard categoryName={"Processadores"} />
          <CategoryCard categoryName={"Placa-mãe"} />
          <CategoryCard categoryName={"Memoria"} />
          <CategoryCard categoryName={"Placa de video"} />
          <CategoryCard categoryName={"Fonte"} />
          <CategoryCard categoryName={"Teclado"} />
          <CategoryCard categoryName={"Mouse"} />
          <CategoryCard categoryName={"Mousepad"} />
          <CategoryCard categoryName={"Gift card"} />
        </div>
      </div>
    </section>
  );
}

export default Categorias;
