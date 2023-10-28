import "./App.css";
import NNavbar from "./components/NNavbar";
import Home from "./pages/Home";
import StarsCanvas from "../src/components/canvas/Stars"
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = ()=>{
      setTimeout(()=>{
        setLoading(false);
      },2000);
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
      <Home></Home>
     
     
      {/* <StarsCanvas></StarsCanvas> */}
    </div>
  );
}

export default App;
