import React from "react";
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const changeMode = () => {
    if (mode === "light") {
      let c1 = document.getElementById("colorPicker1");
      let c2 = document.getElementById("colorPicker2");
      if (c1.value !== "#000000" && c2.value !== "#000000") {
        setmode("dark");
        document.body.style.backgroundColor = c2.value;
        document.body.style.color = c1.value;
        showAlert("Dark Mode Enabled", "light");
      }
      else{
        window.alert("Select color for background and foreground");
      }
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "dark");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="Text Utils" mode={mode} changeMode={changeMode} />
      <Alert alert={alert} />
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
      <Textform heading="Enter Text To Analyze" mode={mode} changeMode={changeMode} showAlert={showAlert} />
      {/* </Route>
        </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
