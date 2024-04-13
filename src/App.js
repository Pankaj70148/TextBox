
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
// import About from './components/About';

function App() {
 
  const[Mode,setMode]=  useState()
  const togglemode= ()=>{
    if(Mode==="light"){
    setMode("dark")
  document.body.style.backgroundColor="#042743"
    }
  
  else{
    setMode("light")
    document.body.style.backgroundColor="white"

  }
  }


  
  return (
   <>
    
<Navbar  mode={Mode} togglemode={togglemode}/>
<div className="container" >
<Form  mode={Mode} togglemode={togglemode} />
</div>
{/* <About/> */}
</>

  );
}

export default App;
