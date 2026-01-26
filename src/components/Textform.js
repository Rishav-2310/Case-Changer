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
    const [text, setText]= useState("Enter text here...");
    return(
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lowercase</button>
        </div>
    )
}

Textform.propTypes= {
    heading: PropTypes.string
}