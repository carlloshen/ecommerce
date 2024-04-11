import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Router from "./router/Router";
import { CardProvider } from "./context/userContext";
import { ProductProvider } from "./context/productContext";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <CardProvider>
        <ProductProvider>
          <Header />
          <div className={pathname === "/login" ? null : pathname === "/cadastro" ? null : "min-h-[50vh]"}>
            <Router />
          </div>
          <Footer />
        </ProductProvider>
      </CardProvider>
    </>
  );
}

export default App;
