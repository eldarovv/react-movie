import "./App.css";

import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./Components/Pages/Search";
import PlayList from "./Components/Pages/PlayList";
import About from "./Components/Pages/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
