import image from "../../assets/images/tenis-1.png";
function CategoryCard({ categoryName }) {
  return (
    <div className="flex flex-col md:flex-row items-center border border-slate-200 bg-slate-200 rounded-md overflow-hidden w-[120px] md:w-[30vw] md:max-w-[250px]  shadow-md">
      <div className=" w-[102px] md:w-[200px] ">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="flex text-center items-center w-full h-full bg-white">
        <p className="text-sm p-2 truncate">{categoryName}</p>
      </div>
    </div>
  );
}

function Categorias() {
  return (
    <section className=" w-screen flex flex-col items-center">
      <div className="flex justify-center mb-14 mt-14">
        <div className="flex flex-wrap gap-3 md:gap-[1vw] justify-center max-w-[646px] md:max-w-[1300px]">
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
          <CategoryCard categoryName={"Gift card"} />
          <CategoryCard categoryName={"Gift card"} />
        </div>
      </div>
    </section>
  );
}

export default Categorias;
