import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import ImageSlider from "./Components/LandingPage/Carousel/Carousel";
import { Route,Routes, Navigate } from "react-router-dom";
import Home  from "./routes/Home"
import Products from "./routes/products";
import Boysclothes from "./Components/Product/Boysclothes";
import Girlsclothes from "./Components/Product/Girlsclothes"
import DummmyNavbar from "./development_test/dummyNavbar/DummmyNavbar"
import Productdetail from "./routes/productdetail";
import Navbar from "./Components/Navbar/Navbar"
import LowerNavbar from "./Components/Navbar/LowerNavbar";
import Footer from "./Components/Footer/Footer"
import NewNavbar from "./development_test/dummyNavbar/test/NewNavbar";
// import LandingPage from "./Components/LandingPage/LandingPage";
import Extranavbar from "./Components/Navbar/Extranavbar";
import Footwear from "./Components/Product/Footwear";
import Cart from "./routes/Cart";
// import Payment from "./routes/payment";
import Checkout from "./Components/checkout/Checkout"

import Login from "./Components/Login1/Login1/Login";
import SignUp from "./Components/Login1/SignUp/SignUp";
function App() {
  
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Navbar/> */}
      <Extranavbar/>
      <LowerNavbar/>
      {/* <DummmyNavbar/> */}
      {/* <NewNavbar/> */}
       <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path='/products' element={<Products/>}>
         <Route path='' element={<Navigate to="boys-clothes"/>}></Route>
         <Route path="boys-clothes" element={<Boysclothes/>}></Route>
         <Route path="girls-clothes" element={<Girlsclothes/>}></Route>
         <Route path="Footwear" element={<Footwear/>}></Route>
         
      </Route>
      <Route path="productdetails" element={<Productdetail/>}></Route>
      <Route path="cart" element={<Cart/>}></Route>
      {/* <Route path="payment" element={<Payment/>}></Route> */}
      <Route path="success" element={<Checkout/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="signup" element={<SignUp/>}></Route>
       </Routes>
       <Footer/>
       {/* </Router> */}
    </div>
  );
}

export default App;
