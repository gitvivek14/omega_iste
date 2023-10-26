import "./App.css";
import Footer from "./components/Footer";
import NNavbar from "./components/NNavbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StarsCanvas from "../src/components/canvas/Stars"
// import bg from './assets/images/bg3.png';
function App() {
  return (
    <div className='w-[100vw] h-[100vh] 
    min-h-screen overflow-y-auto bg-black landing relative z-0'>
      <NNavbar></NNavbar>
      <Home></Home>
      {/* <StarsCanvas></StarsCanvas> */}
      
     
      
      
      
     
    </div>
  );
}

export default App;
