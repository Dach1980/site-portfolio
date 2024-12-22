import "./styles/main.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar.js"
import Footer from "./components/Footer/Footer.js"
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Project from "./pages/Project.js";
import Contacts from "./pages/Contacts.js";
import ScrollToTop from "./utils/scrollToTop.js";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
