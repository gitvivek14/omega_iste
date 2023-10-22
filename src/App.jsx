import "./App.css";
import Footer from "./components/Footer";
import NNavbar from "./components/NNavbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import bg from './assets/images/bg3.png';
function App() {
  return (
    <div className='w-[100vw] h-[100vh] 
    min-h-screen overflow-y-auto bg-black landing'>
      <NNavbar></NNavbar>
      <Home></Home>
    </div>
  );
}

export default App;
