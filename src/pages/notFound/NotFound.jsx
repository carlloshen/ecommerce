import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen text-center">
      <h1 className="text-4xl font-bold text-gray-800 text-center">404 - Página não encontrada</h1>
      <p className="text-lg text-gray-600 mt-4 text-center">
        Desculpe, a página que você está procurando não pôde ser encontrada.
      </p>
      <Link>
        <button className="mt-8 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">
          Ir para a página inicial
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
