import image from "../../assets/images/tenis.png"
function CategoryCard (){
    return(
        <div className="grid grid-cols-3 bg-slate-100  h-[96px] rounded-md pl-3">
            <div className="col-span-1 flex justify-center items-center">
                <img src={image} alt="" className=" w-[82px] h-[81px] rounded-md shadow-xl" />
            </div>
            <div className="col-span-2 flex justify-center items-center">
                <p className="text-xl font-semibold">Acessórios</p>
            </div>
        </div>
    )
}




function Categorias() {
  return (
  <div className="flex flex-wrap gap-5 justify-center mb-10 mt-10">
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
  </div>
  );
}

export default Categorias;