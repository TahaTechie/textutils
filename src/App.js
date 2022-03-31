import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import React ,{useState} from 'react';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const changeMode = ()=>{
    if(mode === "light"){
      setmode("dark");
      let c1 = document.getElementById("colorPicker1");
      let c2 = document.getElementById("colorPicker2");
      document.body.style.backgroundColor = c2.value;
      document.body.style.color = c1.value;
      showAlert("Dark Mode Enabled","light");
      window.alert("You can also select color for background and foreground");
      setTimeout(() => {
        document.title = "TextUtils-Home"
      }, 2000);
      setTimeout(() => {
        document.title = "install TextUtils free"
      }, 1500);
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled","dark");
    }
  }

  const showAlert =(message,type)=>{
    setAlert({
      message: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
    <>
      <Navbar title="Text Utils" mode={mode} changeMode={changeMode}/>
      <Alert alert={alert}/>
      <Textform heading="Enter Text To Analyze" mode={mode} changeMode={changeMode} showAlert={showAlert}/>
    </>
  );
}

export default App;
