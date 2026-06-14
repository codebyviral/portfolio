import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/Projects";
import Navbar from "./components/Navigation/Navbar"
import FullScreenNav from "./components/Navigation/FullScreenNav";

const App = () => {
  return (
    <div className="text-white overflow-x-hidden">
      <Navbar />
      <FullScreenNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>
  );
};

export default App;
