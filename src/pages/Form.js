import React, { useState } from "react";
import "../styles/Form.css";
import myImg from "../images/1337.png";
import { Form } from "../components/Form";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div className="freez-app ">
      <div className="logo" style={{ animation: buttonClicked ? "move-up 1s ease forwards" : "none" }}>
        <img src={myImg} alt="Img not found" />
      </div>

      <div className="first-btn-div" style={{ display: buttonClicked ? "none" : "block" }}>
        <button className="first-btn" onClick={() => setButtonClicked(true)}>
          Get Started
        </button>
      </div>

      <div className="form-wrapper" style={{ opacity: buttonClicked ? 1 : 0, transform: buttonClicked ? "translateY(-8vh)" : "translateY(0)", transition: "opacity 0.6s ease, transform 0.5s ease" }}>
        {buttonClicked && <Form />}
      </div>

      <style>
        {`
          @keyframes move-up {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-15vh);
            }
          }

          .form-wrapper {
            margin-top: 10px;
          }
        `}
      </style>
    </div>
  );
}

export default App;