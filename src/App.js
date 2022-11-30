import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Footer from './Components/Footer/Footer';
import LowerNavbar from './Components/Navbar/LowerNavbar';

function App() {
  return (
    <Box>
   
    <Navbar />
    <LowerNavbar/>
<Footer/>
    </Box>
  );
}

export default App;
