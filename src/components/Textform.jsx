import React from 'react';

export default function Textform(props) {
    const [text,setText] = React.useState("Enter Your Text ");
    const [emails,setEmails]= React.useState([]);
    const [mode, setMode] = React.useState({
        color:"black",
        backgroundColor:"white"
    });
    const [btnText, setbtnText] = React.useState("Dark Mode");
    const [changeClass, setchangeClass] = React.useState("btn btn-dark mx-2");

    const handleChange = (e)=> {
        setText(e.target.value);
    }

    const extractEmail = ()=> {
        setEmails(text.match(/[\w]+@[\w\-]+\.[\w]{2,}/g));
    }

    const changeMode = ()=> {
        if(mode.color==="black"){
            setMode({
                color:"white",
                backgroundColor:"black"
            });
            setbtnText("Light Mode");
            setchangeClass("btn btn-light mx-2");
        }
        else{
            setMode({
                color:"black",
                backgroundColor:"white"
            });
            setbtnText("Dark Mode");
            setchangeClass("btn btn-dark mx-2"); 
        }
    }


    return (
        <>
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={changeMode} type="checkbox" role="switch" />
            <label className="form-check-label">{btnText}</label>
        </div>
        <div className="container my-3" style={mode}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className={changeClass} onClick={()=> {setText(text.toUpperCase())}} >Convert to Upper Case</button>
            <button className={changeClass} onClick={()=> {setText(text.toLowerCase())}} >Convert to Lower Case</button>
            <button className={changeClass} onClick={extractEmail} >Extract Email</button>
            <button className={changeClass} onClick={()=> setText("")} >Clear</button>
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
