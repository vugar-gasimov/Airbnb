import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./components/Data";
import "./App.css";
function App() {
  const cards = Data.map((card) => {
    return <Card {...card} key={card.id} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </>
  );
}

export default App;
