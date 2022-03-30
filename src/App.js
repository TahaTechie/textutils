import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React ,{useState} from 'react';

function App() {
  const [mode, setmode] = useState("light");
  const changeMode = ()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>
      <Navbar title="Text Utils" mode={mode} changeMode={changeMode}/>
      <Textform heading="Enter Text To Analyze" mode={mode} changeMode={changeMode}/>
    </>
  );
}

export default App;
