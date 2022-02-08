
import Aboutpage from './component/Aboutpage'
import Portfolio from './component/Portfolio'
import Example from './component/Example'
import Signature from './component/Signature'
import Contact from './component/Contact'
import Intro from './component/Intro'
import Navbarscroll from './component/Navbarscroll'
import  Homedemo from './component/Homedemo'
import './App.css';
import { gsap, Power3 } from "gsap";
import { BrowserRouter as Router,Routes,Route }from "react-router-dom";

function App() {
  let t1 = new gsap.timeline();
  let ease = Power3.easeOut();
  let easeio = Power3.easeInOut();
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route  path="/" element={<Homedemo timeline = {t1} ease={ease} easeio={easeio}/>} />
      
       <Route  path="/about" element={<Aboutpage timeline = {t1} ease={ease}/>} />
       <Route  path="/portfolio" element={<Portfolio timeline = {t1} ease={ease}/>} />
       <Route  path="/Example" element={<Example timeline = {t1} ease={ease}/>} />
       <Route  path="/Signature" element={<Signature />} />
       <Route  path="/Contact" element={<Contact timeline = {t1} ease={ease}/>} />
      
       <Route  path="/Intro" element={<Intro />} />
       <Route  path="/Navbarscroll" element={<Navbarscroll timeline = {t1} ease={ease} easeio={easeio}/>} />
       
       </Routes>
    </Router>
   
    </div>
  );
}

export default App;
