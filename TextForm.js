import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
        let text1 = text.toLowerCase();
        setText(text1)
    }

    const handleclearClick = () =>{
        setText("")
    }

    const handlecopyClick = () =>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) =>{
        //console.log("on change")
        setText(event.target.value);
    }

    const handleextraspacesClick = () =>{
        let text1 = text.split(/[ ]+/);
        setText(text1.join(" "))
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handlecopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleextraspacesClick}>Remove Extra Spaces</button>

    </div>
    <div className="container my-2">
    <h2>Your text Summary</h2>
    <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
    <h3>Preview</h3>
    <p>{text.length>0 ? text:"Enter something in above textbox to preview it here"}</p>
    </div>
    </>
  )
}
