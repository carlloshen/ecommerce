import Card from "../../components/card/Card";
import PromocaoMobile from "../../assets/images/promocao-mobile.png";
import PromocaoDesktop from "../../assets/images/banner-desktop-1.png";

function Home() {
  return (
    <>
      <main className="mb-10 w-screen ">
        <div className="flex flex-col items-center ">
          <img src={PromocaoDesktop} alt="" className="md:hidden w-full" />
          <img src={PromocaoDesktop} alt="" className="hidden md:block" />
          {/* <button className= "md:hidden bg-orange-500 text-white w-[80vw] h-[40px] absolute bottom-8 font-semibold rounded-md hover:bg-orange-600">Aproveitar a Oferta</button> */}
        </div>
        <section className="w-full flex justify-center ">
          <div className="md:w-[90vw] flex flex-col ">
            <h2 className="text-blue-900 font-semibold p-3">Destaques</h2>
            <div className="flex flex-wrap items-center w-full gap-2 md:gap-5 justify-center md:justify-start">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
