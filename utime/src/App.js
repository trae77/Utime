import "./App.css";
import React from "react";


function App() {
  const buttonstyle = {
    height : "40px",
    width : "70px",
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
    fontFamily: "Sans-Serif"
  };
  return (
    
    <div className="App">
      <header className="App-header">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Utime pool hall</h1>
        <buttonGroup >
        <button style = {buttonstyle}>Home</button>
        <button style = {buttonstyle}>Book</button>
        <button style = {buttonstyle}>Services</button>
        <button style = {buttonstyle}>Gallery</button>
        <button style = {buttonstyle}>Contact</button>
      </buttonGroup>
      </header>
  <body>
      <div>
      <p></p>
      </div>
      <div>
        <p>Utime is a pool hall located in the heart of downtown Toronto. We offer a variety of services such as pool tables, darts, and a full bar. Our pool hall is the perfect place to relax and unwind after a long day at work. Whether you are looking to play a game of pool with friends or enjoy a drink at the bar, Utime has something for everyone. Come visit us today and experience the best pool hall in Toronto!</p>  
      </div>





      </body>
    </div>
  );
}

export default App;
