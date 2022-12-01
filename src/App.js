import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import ImageSlider from "./Components/LandingPage/Carousel/Carousel";

function App() {
  return <div className="App"></div>;
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
       </Routes>
       {/* </Router> */}
    </div>
  );
}

export default App;
