import "./App.css";
import NNavbar from "./components/NNavbar";
import Home from "./pages/Home";
import StarsCanvas from "../src/components/canvas/Stars"
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader";
import {Route,Routes} from "react-router-dom"
import Template from "./components/Registration";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = ()=>{
      setTimeout(()=>{
        setLoading(false);
      },1000);
    }
  
  load();
  }, [])

  if(loading){
    return(
      <PreLoader></PreLoader>
    )
  }
  return (
    <div className='w-[100vw] h-[100vh] 
    min-h-screen overflow-y-auto bg-black landing relative z-0'>
       <NNavbar></NNavbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="register" element={<Template/>}>
          
        </Route>
      </Routes>
      
     
     
     
      {/* <StarsCanvas></StarsCanvas> */}
    </div>
  );
}

export default App;
