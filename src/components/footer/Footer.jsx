import icone from "../../assets/images/icone-4x.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    
      <footer className="bg-blue-900 items-center p-5 ">
        <div className="flex flex-wrap gap-6 md:justify-center md:gap-32">
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
              <FaFacebook className="text-white" />
              <FaInstagram className="text-white" />
              <FaWhatsapp className="text-white" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-xs font-semibold text-white">Informações</h6>
            <p className="text-white text-xs">Sobre o E-Rede Store</p>
            <p className="text-white text-xs">Segurança</p>
            <p className="text-white text-xs">Lista de Desejos</p>
            <p className="text-white text-xs">Trabalhe Conosco</p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-xs font-semibold text-white">Informações</h6>
            <p className="text-white text-xs">Tênis</p>
            <p className="text-white text-xs">Camiseta</p>
            <p className="text-white text-xs">Acessórios</p>
            <p className="text-white text-xs">Esportivo</p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-xs font-semibold text-white">Localização</h6>
            <p className="text-white text-xs">Rua Martinho Rodrigues, 331</p>
            <p className="text-white text-xs">Bairro de Fátima, Fortaleza-CE</p>
          </div>
        </div>
        <hr className="mt-5" />
        <p className="text-xs text-center mt-1 text-white"> ₢ 2023 IRede</p>
      </footer>
    
  );
}

export default Footer;
