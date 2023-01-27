import "bootstrap/dist/css/bootstrap.css";
import  "./App.css"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Particles from "react-particles-js";
function App() {
  return (
    <div className="App">
      {/* <Particles
      
      /> */}
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
