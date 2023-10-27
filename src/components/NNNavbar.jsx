import React,{useState}  from 'react'
import "./NNNavbar.css";
import {HashLink as Link} from 'react-router-hash-link';

const NNNavbar = () => {
    const[MenuOpen,setMenuopen]=useState(false);
  return (
    <nav>
        <Link to="/" className='Title'>ISTE</Link>
        <div className='Menu' onClick={()=>{
            setMenuopen(!MenuOpen);
        }}>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </div>
        <ul className={MenuOpen?"open":""}>
            <li><Link to='#About'  smooth>About</Link></li>
            <li><Link to='#RuleBook' smooth>Rulebook</Link></li>
            <li><Link smooth>Our Team</Link></li>
            <li><Link to='#Sponsors' smooth>Sponsors</Link></li>
            <li><Link smooth>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default NNNavbar
