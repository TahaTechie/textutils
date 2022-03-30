import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import React ,{useState} from 'react';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const changeMode = ()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled","success");
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
