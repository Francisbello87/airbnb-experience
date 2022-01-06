import "./main.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardElements = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="card-contents">{cardElements}</div>
    </div>
  );
}

export default App;
