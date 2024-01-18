import "./App.css";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import TechStack from "./pages/TechStack";
import Work from "./pages/Work";

function App() {
  return (
    <div className="">
      <Sidebar />
      <Home />
      <About />
      <TechStack />
      <Project />
      <Education />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
