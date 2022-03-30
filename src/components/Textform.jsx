import React from 'react';

export default function Textform(props) {
    const [text,setText] = React.useState("Enter Your Text ");
    const [emails,setEmails]= React.useState([]);

    const handleChange = (e)=> {
        setText(e.target.value);
    }

    const extractEmail = ()=> {
        setEmails(text.match(/[\w]+@[\w\-]+\.[\w]{2,}/g));
        props.showAlert("Converted to Upper Case","warning")
    }

    return (
        <>
        <div className="container my-3" >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode==="light" ? "dark" : "light"}`} onClick={()=> {setText(text.toUpperCase()); props.showAlert("Converted to Upper Case","info")}} >Convert to Upper Case</button>
            <button className={`btn btn-${props.mode==="light" ? "dark" : "light"} mx-2`} onClick={()=> {setText(text.toLowerCase()); props.showAlert("Converted to Lower Case","info")}} >Convert to Lower Case</button>
            <button className={`btn btn-${props.mode==="light" ? "dark" : "light"} mx-2`} onClick={extractEmail} >Extract Email</button>
            <button className={`btn btn-${props.mode==="light" ? "dark" : "light"} mx-2`} onClick={()=> {setText(""); props.showAlert("Clear Text","danger")}} >Clear</button>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} Number of Words and {text.length} Number of Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Required to read</p>
            <h1>Preview</h1>
            <p>{text}</p>
            <h1>Email in Text</h1>
            <p>{emails}</p>
        </div>
        </>
    )
}
