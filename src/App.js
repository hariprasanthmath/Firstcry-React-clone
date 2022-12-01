<<<<<<< HEAD
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Footer from './Components/Footer/Footer';
import LowerNavbar from './Components/Navbar/LowerNavbar';
=======
import "./App.css";
// import LandingPage from "./Components/LandingPage/LandingPage";
// import ImageSlider from "./Components/LandingPage/Carousel/Carousel";
import { Route,Routes, Navigate } from "react-router-dom";
import Home  from "./routes/Home"
import Products from "./routes/products";
import Boysclothes from "./Components/Product/Boysclothes";
import Girlsclothes from "./Components/Product/Girlsclothes"
import DummmyNavbar from "./development_test/dummyNavbar/DummmyNavbar"
>>>>>>> 7dd6b59e7c02b87fabb226a4575a6a96a3e009eb

function App() {
  
  return (
<<<<<<< HEAD
    <Box>
   
    <Navbar />
    <LowerNavbar/>
<Footer/>
    </Box>
=======
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
       </Routes>
       {/* </Router> */}
    </div>
>>>>>>> 7dd6b59e7c02b87fabb226a4575a6a96a3e009eb
  );
}

export default App;
