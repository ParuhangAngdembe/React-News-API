import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="newscard">
        <Home />
      </div>
    </>
  );
}

export default App;
