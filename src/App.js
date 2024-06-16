import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="App max-w-[1700px] mx-auto">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
