import tenis from "../../assets/images/tenis.png";

function Card() {
  return (
    <div aria-label="card" className="w-[176px]  border-solid shadow  border-2 rounded-lg ml-2 mt-2">
      <img src={tenis} alt="" className="w-[176px] h-[134px] object-cover" />
      <h3 className="text-xl font-bold leading-[120%] text-blue-900 ml-2">
        Nique Air Surf
      </h3>
      <p className="text-[#DDD] text-xs font-medium ml-2">Tenis</p>
      <p className="text-[#EA580C] text-lg font-semibold ml-2">R$ 200.00</p>
      <button className="font-medium text-xs bg-blue-900 text-white rounded-lg h-[24px] w-[75px] mt-2 ml-2 mb-2">
        Comprar
      </button>
    </div>
  );
}

export default Card;
