import React from 'react';

export default function Textform(props) {
    const [text,setText] = React.useState("Enter Your Text ");
    const handleChange = (e)=> {
        setText(e.target.value);
    }
    return (
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary"onClick={()=> {setText(text.toUpperCase())}} >Convert to Upper Case</button>
        </div>
    )
}
