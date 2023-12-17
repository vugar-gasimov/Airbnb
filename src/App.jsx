import "./App.css";
import Card from "./components/Card";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./components/Data";
function App() {
  const cards = Data.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    );
  });
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <section className="card-list">{cards}</section>
    </>
  );
}

export default App;
