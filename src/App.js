import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
