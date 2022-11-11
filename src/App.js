import { Routes, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from "./components/Home";
import Projects from './components/Projects';

import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import CarouselComp from './components/CarouselComp';

function App() {
  return (
    <div className='bodyApp'>
      {/* <CarouselComp> */}
         <Header/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
      </Routes> 
    {/* <div className="footerDiv"> */}
      <Footer/>
    {/* </div> */}
    {/* </CarouselComp> */}
    </div>
  );
}

export default App;
