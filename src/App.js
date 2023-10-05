import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { HomePage } from './Components/Homepage/Homepage';
import { About } from './Components/About/About';
import { Experience } from './Components/Experience/Experience';
import { Projects } from './Components/Projects/Projects';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </Router>
  );
}

export default App;