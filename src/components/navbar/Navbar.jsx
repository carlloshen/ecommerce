import { useLocation } from "react-router-dom";

function Navbar({className,  handleClickPageChange}) {

    const { pathname } = useLocation();

    const linksNavbar = [
        { id: "", text: "Home", path: "/" },
        { id: "produtos", text: "Produtos", path: "/produtos" },
        { id: "categorias", text: "Categorias", path: "/categorias" },
        { id: "meuspedidos", text: "Meus Pedidos", path: "/meuspedidos" },
      ];



  return (
  <>
    {linksNavbar.map((link, index) => (
                <a
                  key={index}
                  id={link.id}
                  className={`${
                    pathname ===  link.path ? "text-orange-500" : null
                  } ${className}`}
                  onClick={(link) => handleClickPageChange(link)}
                >
                  {link.text}
                </a>
              ))}
  </>
  );
}

export default Navbar;