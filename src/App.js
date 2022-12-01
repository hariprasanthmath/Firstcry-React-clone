import "./App.css";
// import LandingPage from "./Components/LandingPage/LandingPage";
// import ImageSlider from "./Components/LandingPage/Carousel/Carousel";
import { Route,Routes, Navigate } from "react-router-dom";
import Home  from "./routes/Home"
import Products from "./routes/products";
import Boysclothes from "./Components/Product/Boysclothes";
import Girlsclothes from "./Components/Product/Girlsclothes"
import DummmyNavbar from "./development_test/dummyNavbar/DummmyNavbar"
import Navbar from "./Components/Navbar/Navbar"
import LowerNavbar from "./Components/Navbar/LowerNavbar";
import Footer from "./Components/Footer/Footer"
import LandingPage from "./Components/LandingPage/LandingPage";
function App() {
  
  return (
    <div className="App">
      {/* <Router> */}
      <Navbar/>
      <LowerNavbar/>
      <DummmyNavbar/>
       <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
        <Route path='/products' element={<Products/>}>
         <Route path='' element={<Navigate to="boys-clothes"/>}></Route>
         <Route path="boys-clothes" element={<Boysclothes/>}></Route>
         <Route path="girls-clothes" element={<Girlsclothes/>}></Route>
         
      </Route>
       </Routes>
       <Footer/>
       {/* </Router> */}
    </div>
  );
}

export default App;
