import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from "./components/Home";
import Projects from './components/Projects';

function App() {
  return (
    <div className='align-center'>
      <div>
      <Home/>
      </div>
      <div>
      <Router>
        <nav className='navs'>
          <ul>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
          <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/projects' element={<Projects/>}/>
          </Routes>
    </Router>
      </div>
      
    </div>
  );
}

export default App;
