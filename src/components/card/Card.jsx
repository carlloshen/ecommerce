import tenis from "../../assets/images/tenis.png";

function Card() {
  return (
    <div aria-label="card" className="w-[144px] md:w-[176px]  border-solid shadow-md  border-2 rounded-lg ml-2 mt-2">
      <img src={tenis} alt="" className=" object-cover" />
      <h3 className="font-bold leading-[120%] text-blue-900 ml-2">
        Nique Air Surf
      </h3>
      <p className="text-slate-300 text-xs font-medium ml-2">Tenis</p>
      <p className="text-orange-500 text-lg font-semibold ml-2">R$ 200.00</p>
      <button className="font-medium text-xs bg-blue-900 text-white rounded-lg h-[24px] w-[90%] mt-2 ml-2 mb-2">
        Comprar
      </button>
    </div>
  );
}

export default Card;
