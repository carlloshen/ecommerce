import Card from "../../components/card/Card"

function Home() {
  return (
    <>
      <main className="mb-10">
        <h2 className="text-blue-900 font-semibold p-3">Destaques</h2>
        <div className="flex flex-wrap">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </main>
    </>
  );
}

export default Home;
