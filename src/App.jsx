import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import CardsData from "./CardsData";
function App() {
  const Cards = CardsData.map(
    item => {
      return <Card
        key={item.id}
        item={item}
      />
    })
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex overflow-x-auto space-x-4 w-fit ">
        {Cards}
      </div>
      
    </>
  );
}

export default App;
