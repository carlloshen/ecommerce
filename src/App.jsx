import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Router from "./router/Router";
import { CardProvider } from "./context/userContext";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <CardProvider>
        <Header />
        <div className={pathname === "/login" ? null : pathname === "/cadastro" ? null : "min-h-[50vh]"}>
          <Router />
        </div>
        <Footer />
      </CardProvider>
    </>
  );
}

export default App;
