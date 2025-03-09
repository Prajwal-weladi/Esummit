import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Etalks from "./components/Etalks";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden" role="main">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <About />
                <Features />
                <Story />
                <Contact />
                <Footer />
              </>
            } 
          />
          <Route path="/etalks" element={<Etalks />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
