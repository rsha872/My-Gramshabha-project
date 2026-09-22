import YojnaDetails from "./pages/YojnaDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Yojna from "./pages/Yojna";
import VikasKarya from "./pages/VikasKarya";
import Samasya from "./pages/Samasya";
import Suchna from "./pages/Suchna";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yojna" element={<Yojna />} />
        <Route path="/yojna/:id" element={<YojnaDetails />} />
        <Route path="/vikas" element={<VikasKarya />} />
        <Route path="/samasya" element={<Samasya />} />
        <Route path="/suchna" element={<Suchna />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;