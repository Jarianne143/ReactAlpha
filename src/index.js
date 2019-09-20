import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body"; 
import Footer from "./components/Footer"; 

const App = () => {
  return (
    <div>    
        <Header />
        <Body /> 
        <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#base"));