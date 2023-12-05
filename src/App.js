import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <Navbar/>
        <AnimatedRoutes/>
      <Footer/>
    </Router>
  );
}

export default App;
