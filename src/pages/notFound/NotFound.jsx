import { useNavigate } from 'react-router-dom';
function NotFound() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">404 - Página não encontrada</h1>
      <p className="text-lg text-gray-600 mt-4">Desculpe, a página que você está procurando não pôde ser encontrada.</p>
      <button onClick={goToHomePage} className="mt-8 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">
        Ir para a página inicial
      </button>
    </div>
  );
}

export default NotFound;