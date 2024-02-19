import icone from "../../assets/images/icone-4x.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-blue-900 items-center p-5">
        <div className="mb-5">
          <div className="flex gap-5 items-center">
            <div className="w-[71.56px] h-[28px] ">
              <img src={icone} alt="" className="" />
            </div>
            <p className="text-[10px] w-[182px] h-[36] text-white ">
              Lorem ipsum lorem ipsum lorem lorem ipsum lorem loram lorem lorem lorem ipsum ipsum ipsum
            </p>
          </div>
          <div className="flex gap-5 mt-4">
            <FaFacebook className="text-white"/>
            <FaInstagram className="text-white"/>
            <FaWhatsapp className="text-white"/>
          </div>
        </div>
        <div>
          <h6 className="text-xs font-semibold text-white">Informações</h6>
        </div>
        <hr className="mt-3"/>
        <p className="text-xs text-center mt-1 text-white"> ₢ 2023 IRede</p>
      </footer>
    </>
  );
}

export default Footer;
