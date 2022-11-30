import './App.css';
import Productcard from './Components/Productcard/Productcard';
import Products from './routes/products';
import {Route , Routes, Navigate, Router, Switch} from 'react-router-dom'
import Home from './routes/Home';
import Boysclothes from './Components/Product/Boysclothes';
import Girlsclothes from './Components/Product/Girlsclothes';
import DummmyNavbar from './development_test/dummyNavbar/DummmyNavbar';import LandingPage from './Components/LandingPage/LandingPage';

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
       </Routes>
       {/* </Router> */}
    </div>
  );
}

export default App;
