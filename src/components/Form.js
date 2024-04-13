import React, { useState } from 'react'




export default function Form(props) {

    const handleOnChange= (event)=>{
        console.log("on change")
        setText(event.target.value)
      
        }
    const handleUpper= ()=>{
    console.log("Upper case was clicked")
    let newtxt= t.toUpperCase()
    setText(newtxt)
    }

    const handleLower= ()=>{
      console.log("Lower case was clicked")
      let newtxt= t.toLowerCase()
      setText(newtxt)
      }
      const handleClear= ()=>{
        console.log("clear")
        let newtxt= ""
        setText(newtxt)
        }
        const speak = () => {
          let msg = new SpeechSynthesisUtterance();
          msg.text = t;
          window.speechSynthesis.speak(msg);
        }
        const handleCopy = () => {
          navigator.clipboard.writeText(t);
        }
   
    const [t,setText]= useState("")
  return (
    <>

  <div className="mb-3">
   
    <textarea className="form-control"  value={t} onChange={handleOnChange}id="myBox" rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-1' onClick={handleUpper}> convert Uppercase </button>
  <button className='btn btn-primary mx-1' onClick={handleLower}> convert Lowercase </button>
  <button className='btn btn-primary mx-1' onClick={handleClear}> Clear </button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  <button className='btn btn-primary mx-1' onClick={handleCopy}> Copy</button>







  <div className="container my-3" style={{color:props.mode==="light"?'black':'white'}}>
    <h2>your text summary</h2>
    <p>{t.split(" ").length} words,{t.length} characters</p>
    <p>{0.008* t.split(" ").length } minutes read</p>
    <h2>Preview</h2>
    <p>{t}</p>
  </div>
  </>
    
  )
}
