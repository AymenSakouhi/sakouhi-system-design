import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <h1>My App</h1>
          <ProgressBar progress={"10"} />
          <Accordion title={"hello this is my accordion"}>
            <Card
              imageSrc="./logo.png"
              title={"test"}
              description={"loremadkljasdlkjasdlakjsjdl"}
            />
          </Accordion>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
