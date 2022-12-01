import "./App.css";
// import LandingPage from "./Components/LandingPage/LandingPage";
// import ImageSlider from "./Components/LandingPage/Carousel/Carousel";
import { Route,Routes, Navigate } from "react-router-dom";
import Home  from "./routes/Home"
import Products from "./routes/products";
import Boysclothes from "./Components/Product/Boysclothes";
import Girlsclothes from "./Components/Product/Girlsclothes"
import DummmyNavbar from "./development_test/dummyNavbar/DummmyNavbar"
import Productdetail from "./routes/productdetail";
function App() {
  
  return (
    <div className="App">
      {/* <Router> */}
      <DummmyNavbar/>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}>
         <Route path='' element={<Navigate to="boys-clothes"/>}></Route>
         <Route path="boys-clothes" element={<Boysclothes/>}></Route>
         <Route path="girls-clothes" element={<Girlsclothes/>}></Route>
         
      </Route>
      <Route path="productdetails" element={<Productdetail/>}></Route>
       </Routes>
       {/* </Router> */}
    </div>
  );
}

export default App;
