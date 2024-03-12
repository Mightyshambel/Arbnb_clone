import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-row ">
      <Card
        img="katie-zaferes.png"
        rating="5"
          outof="6"
          desc="this is the image and prps"
        money="128$"
      />
      <Card
        img="star.png"
        rating="5"
        outof="6"
        money="110$"
      />
      <Card
        img="star.png"
        rating="5"
        outof="6"
        money="124$"
      />
      </div>
      
    </>
  );
}

export default App;
