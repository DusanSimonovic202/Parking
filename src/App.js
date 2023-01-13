import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import Onama from "./pages/Onama";
import Kontakt from "./pages/Kontakt";
import Error from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Pocetna />}></Route>

          <Route path="/onama" element={<Onama />}></Route>

          <Route path="/kontakt" element={<Kontakt />}></Route>

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
