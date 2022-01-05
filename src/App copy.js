import "./main.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardElements = data.map((card) => {
    return (
      <Card
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        props={card.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="card-contents">
        {cardElements}
        {/* <Card
          img="/images/image 12.png"
          rating="5.0"
          reviewCount={6}
          country="Nigeria"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img="/images/image 12.png"
          rating="5.0"
          reviewCount={6}
          country="Nigeria"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img="/images/image 12.png"
          rating="5.0"
          reviewCount={6}
          country="Nigeria"
          title="Life Lessons with Katie Zaferes"
          price={136}
        /> */}
      </div>
    </div>
  );
}

export default App;
