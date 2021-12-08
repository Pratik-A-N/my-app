
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import TextForm from './Components/TextForm';


function App() {
  const [mode, setMode] = useState('light');

  const toggle = ()=>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }

  return (
    <> 
    {/* <Router> */}
     <Navbar title= "TextUtils" mode={mode} toggle={toggle}/>
     <div className="container">
     {/* <Switch> */}
          {/* <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/"> */}
            <TextForm title = "Enter the text to analyse"/>
          {/* </Route>
      </Switch> */}
     </div>
     {/* </Router> */}
    </>
  );
}

export default App;
