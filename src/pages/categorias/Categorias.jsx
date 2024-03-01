import image from "../../assets/images/tenis.png";
function CategoryCard({categoryName}) {
  return (
    <div className="flex bg-slate-100 w-[250px]  h-[96px] rounded-md pl-2 shadow-md">
      <div className="mr-2 flex items-center">
        <img src={image} alt="" className=" w-[82px] h-[81px] rounded-md shadow-xl" />
      </div>
      <div className="flex items-center">
        <p className="text-[19px] font-semibold">{categoryName}</p>
      </div>
    </div>
  );
}

function Categorias() {
  return (
    <section className=" w-screen mb-20 mt-20 flex justify-center">
      <div className="md:w-[90vw] ">
        <div className="flex flex-wrap items-center w-full gap-3 md:gap-4 justify-center md:justify-start max-w-[1200px]">
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
