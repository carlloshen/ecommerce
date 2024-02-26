import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Router from "./router/Router";

function App() {
  return (
    <>
      <Header />
      <main className="w-screen flex justify-center items-center">
        <div className="max-w-[1200px] ">
          <Router />
        </div>
      </main>
    </>
  );
}

export default App;
