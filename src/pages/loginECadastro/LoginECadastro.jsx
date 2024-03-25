import { Link, useLocation, useNavigate } from "react-router-dom";
import logoMarca from "../../assets/images/icone-4x.png";
import { useContext, useState } from "react";
import request from "../../api/axiosHelper";
import { UserContext } from "../../context/userContext";
import formsValidation from "../../../utils/utils";

function FormCadastro() {
  const navigator = useNavigate();
  const [userCredentials, setUserCredentials] = useState({ username: "", email: "", password: "" });

  const handleUserCredentialsChange = (credentials) => {
    const { name, value } = credentials.target;
    setUserCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const userRegister = async (event) => {
    event.preventDefault();
    const validateFields = formsValidation.validateFieldsRegister(userCredentials);

    try {
      if (validateFields.errorMessage) {
        throw validateFields.errorMessage;
      }
      const register = await request("POST", "/signup", userCredentials);
      if (register.status === 201) {
        console.log(register.data);
        navigator("/login");
      }
    } catch (error) {
      if (error.request && error.request.response) {
        console.log(JSON.parse(error.request.response).errorMessage);
        return JSON.parse(error.request.response).errorMessage;
      }
      return error;
    }
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
          name="username"
          id="name"
          placeholder="Digite seu nome"
          className="bg-slate-100 rounded-sm p-2"
          value={userCredentials.username}
          onChange={handleUserCredentialsChange}
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
          value={userCredentials.email}
          onChange={handleUserCredentialsChange}
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
          value={userCredentials.password}
          onChange={handleUserCredentialsChange}
        />
      </div>
      <button
        className="bg-orange-500 text-white font-semibold text-base h-[60px] rounded-md w-full max-w-[250px] mb-5"
        onClick={userRegister}
      >
        Cadastrar
      </button>
      <p className="text-center mb-5">
        Ja possui cadastro ?{" "}
        <Link to={"/login"} className="cursor-pointer text-orange-500">
          Clique aqui
        </Link>
      </p>
    </>
  );
}

function FormLogin() {
  const navigator = useNavigate();
  const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });
  const { setStoredUser } = useContext(UserContext);

  const userLogin = async (event) => {
    event.preventDefault();

    const validateFields = formsValidation.validateFieldsLogin(userCredentials);

    try {
      if (validateFields.errorMessage) {
        throw validateFields.errorMessage;
      }
      const loginRequest = await request("POST", "/login", userCredentials);
      if (loginRequest.data) {
        setStoredUser(loginRequest.data.token);
        navigator("/");
      }
    } catch (error) {
      if (error.request && error.request.response) {
        console.log(JSON.parse(error.request.response).errorMessage);
        return JSON.parse(error.request.response).errorMessage;
      }
      console.log(error);
      return error;
    }
  };

  const handleUserCredentialsChange = (credentials) => {
    const { name, value } = credentials.target;
    setUserCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
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
          value={userCredentials.email}
          onChange={handleUserCredentialsChange}
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
          value={userCredentials.password}
          onChange={handleUserCredentialsChange}
        />
      </div>
      <button
        onClick={userLogin}
        className="bg-orange-500 text-white font-semibold text-base h-[60px] rounded-md w-full max-w-[250px] mb-5"
      >
        Login
      </button>
      <p className="text-center mb-5">
        Não possui cadastro ?{" "}
        <Link to={"/cadastro"} className="cursor-pointer text-orange-500">
          Clique aqui
        </Link>
      </p>
    </>
  );
}

function LoginECadastro() {
  const { pathname } = useLocation();

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-blue-900 md:grid md:grid-cols-2">
      <div className="pt-5 pb-5 mb-5 flex justify-center md:flex-col md:items-center  md:order-1 ">
        <p className="hidden md:block mb-5 text-[32px] text-white max-w-[380px] ">
          Sua nova experiência em compras online
        </p>
        <Link to={"/"}>
          <img src={logoMarca} alt="Logo Marca E-Rede Store" className="w-20 md:w-80 cursor-pointer" />
        </Link>
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
