import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReactProjects from "./pages/ReactProjects";
import MiniProjects from "./pages/MiniProjects";
import PythonGames from "./pages/PythonGames";
import NodejsAPIs from "./pages/NodejsAPIs";
import { Navbar } from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <Router>
        <AnimatedCursor
          color="58, 191, 248"
          innerSize={8}
          outerSize={16}
          clickables={[
            "iframe",
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/react-projects" element={<ReactProjects />} />
              <Route path="/mini-projects" element={<MiniProjects />} />
              <Route path="/python-games" element={<PythonGames />} />
              <Route path="/nodejs-apis" element={<NodejsAPIs />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
