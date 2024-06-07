
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import ContactUs from './components/Pages/ContactUs';
import About from './components/Pages/About';
import Esp32 from './components/Pages/Esp32';
import Ezef from './components/Pages/Ezef';
import Respberrypi from './components/Pages/Respberrypi';
import Stm32 from './components/Pages/Stm32';
import Buy from './components/ProductComponent/Buy';
import Tutorial from './components/Pages/Tutorial';


// import Footer from './components/Pages/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/tutorial' element={<Tutorial/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/esp32' element={<Esp32/>}></Route>
        <Route path='/e8085' element={<Ezef/>}></Route>
        <Route path='/stm32' element={<Stm32/>}></Route>
        <Route path='/respberrypi' element={<Respberrypi/>}></Route>
        <Route path='/buynow' element={<Buy/>}></Route>
      </Routes>
      {/* <Footer/> */}
    </Router>

  );
}

export default App;
