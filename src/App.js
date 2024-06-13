import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Card from "./components/Card";
function App() {
  return (
   
    <BrowserRouter>
      <div className="App">
        <Navbar />      
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/:user" Component={Card} />
        </Routes>      
      </div>
      </BrowserRouter>
  );
}

export default App;
