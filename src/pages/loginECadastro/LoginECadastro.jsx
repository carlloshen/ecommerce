import { useLocation, useNavigate } from "react-router-dom";
import logoMarca from "../../assets/images/icone-4x.png";

function FormCadastro() {
  const navigator = useNavigate();
  const handleClickPageChange = () => {
    navigator("/login");
  };
  return (
    <>
      <div className="mb-3">
        <label htmlFor="name" className="block text-base mb-2">
          {" "}
          Nome:*
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          className="bg-slate-100 rounded-sm p-2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="block text-base mb-2">
          E-mail:*
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          className="bg-slate-100  rounded-sm p-2"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block text-base mb-2">
          {" "}
          Senha:*
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          className="bg-slate-100  rounded-sm p-2"
        />
      </div>
      <button className="bg-orange-500 text-white font-semibold text-base h-[60px] rounded-md w-full max-w-[250px] mb-5">
        Cadastrar
      </button>
      <p className="text-center mb-5">
        Ja possui cadastro ?{" "}
        <a onClick={handleClickPageChange} className="cursor-pointer text-orange-500">
          Clique aqui
        </a>
      </p>
    </>
  );
}

function FormLogin() {
  const navigator = useNavigate();
  const handleClickPageChange = () => {
    navigator("/cadastro");
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="email" className="block text-base mb-2">
          E-mail:*
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          className="bg-slate-100  rounded-sm p-2"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block text-base mb-2">
          {" "}
          Senha:*
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          className="bg-slate-100  rounded-sm p-2"
        />
      </div>
      <button className="bg-orange-500 text-white font-semibold text-base h-[60px] rounded-md w-full max-w-[250px] mb-5">
        Login
      </button>
      <p className="text-center mb-5">
        Não possui cadastro ?{" "}
        <a onClick={handleClickPageChange} className="cursor-pointer text-orange-500">
          Clique aqui
        </a>
      </p>
    </>
  );
}

function LoginECadastro() {
  const { pathname } = useLocation();
  const navigator = useNavigate()

  return (

    <div className="h-screen w-screen flex flex-col items-center bg-blue-900 md:grid md:grid-cols-2">

      <div className="pt-5 pb-5 mb-5 flex justify-center md:flex-col md:items-center  md:order-1 ">
        <p className="hidden md:block mb-5 text-[32px] text-white max-w-[380px] ">Sua nova experiência em compras online</p>
        <img src={logoMarca} alt="Logo Marca E-Rede Store" className="w-20 md:w-80 cursor-pointer" onClick={() => navigator("/")} />
      </div>
      <div className="md:w-[50vw] md:h-screen md:items-center md:bg-slate-300 flex justify-center">
        <div className="bg-white w-screen pt-5 max-w-[90%]  md:max-w-[450px] items">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-semibold ">
              {pathname === "/login" ? "Fazer Login" : "Cadastre-se"}
            </h2>
          </div>
          <form method="POST" className="flex flex-col justify-center items-center">
            {pathname === "/login" ? <FormLogin /> : <FormCadastro />}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginECadastro;
