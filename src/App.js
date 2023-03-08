import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Header />

      <Project />

      <Footer />

    </div>
  );
}

export default App;
