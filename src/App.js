import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReactProjects from "./pages/ReactProjects";
import MiniProjects from "./pages/MiniProjects";
import PythonGames from "./pages/PythonGames";
import NodejsAPIs from "./pages/NodejsAPIs";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
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
