import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === "dark" ? "dark" : "light"} bg-${props.mode === "dark" ? "dark" : "light"}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li> */}
                    </ul>
                    <input type="color" className="form-control form-control-color mx-1" id="colorPicker1"></input>
                    <label className="form-label mx-1 my-1" style={props.mode==="dark"?{color:`${document.getElementById("colorPicker1").value}`}:{color:"black"}}>Foreground Color</label>
                    <input type="color" className="form-control form-control-color mx-1" id="colorPicker2"></input>
                    <label className="form-label mx-1 my-1" style={props.mode==="dark"?{color:`${document.getElementById("colorPicker2").value}`}:{color:"black"}}>Background Color</label>
                    <div className="form-check form-switch">
                        <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`}>{props.mode === "light" ? "Dark Mode" : "Light Mode"}</label>
                        <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" value="dark" />
                    </div>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "set Title Here"
}