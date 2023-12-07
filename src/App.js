import './App.css';
import {HashRouter as Router} from "react-router-dom"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AnimatedRoutes from './Components/AnimatedRoutes';
import { GlobalStyle } from './Styles/Styled Components/Global.style';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
        <AnimatedRoutes/>
      <Footer/>
    </Router>
  );
}

export default App;
