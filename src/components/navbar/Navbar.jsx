import { HiOutlineMenu } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import icone from "../../assets/images/icone-4x.png";
import InputHeader from "../inputHeader/InputHeader";
function Navbar() {
  return (
    <nav className="bg-blue-900 items-center pt-5 pb-5">
      <div className="flex justify-between items-center h-20 ml-5 mr-5 ">
        <button className="peer">
          <HiOutlineMenu className="text-white text-2xl" />
        </button>
        <img src={icone} alt="" className=" w-[71.56px] h-[28px] object-cover peer-focus:hidden" />
        <button >
          <FaCartShopping   className="text-white text-2xl" />
        </button>
      </div>
     <InputHeader/>
    </nav>
  );
}

export default Navbar;
