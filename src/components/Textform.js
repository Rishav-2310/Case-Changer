import React, {useState} from 'react'
import PropTypes from 'prop-types';
export default function Textform(props){
    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value);

    }
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked"+ text);
        let upText= text.toUpperCase();
        setText(upText)
    }
    const handleDownClick= ()=>{
        let lowText= text.toLowerCase();
        setText(lowText)
    }
    const handleClearClick= ()=>{
        let clearText= '';
        setText(clearText)
    }
    const handleCopyClick= ()=>{
        let text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Text Copied");
    }
    const handleExtraSpaces= ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText]= useState('');
    return(
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here...'></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Mintues to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

Textform.propTypes= {
    heading: PropTypes.string
}