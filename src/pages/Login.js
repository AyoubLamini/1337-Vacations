import React, { useState } from "react";
import '../styles/App.css';
import { Login } from "../components/Login";
import { ResetPassword } from "../components/ResetPassword";
import myImg from '../images/1337.png'

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (

    <div className="App">
       <div className="logo">
        <img src={myImg} alt="Img not found"/>
      </div> 
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <ResetPassword onFormSwitch={toggleForm} />
      }
    </div> 
  );
}

export default App;
