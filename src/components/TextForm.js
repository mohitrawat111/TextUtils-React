import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = "new text";// Wrong way to change the state
    // setText("new text");// correct way to change the state
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have clicked on handleUpClick");
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("Onchange");
        setText(event.target.value);
    }
    const handleLoClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = (event) => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success");
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className="form-label">Example Textarea</label> */}
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? '#042743' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.replace(/ /g, "").length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
