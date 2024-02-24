import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card"

function Home() {
  return (
    <>
      <Header />
      <main className="mb-10">
        <h2 className="text-blue-900 font-semibold p-3">Destaques</h2>
        <div className="flex flex-wrap">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
