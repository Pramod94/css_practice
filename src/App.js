import React, { Component } from "react";
import "./App.css";
import Content from './AccordianContent.json';
import Accordian from "./Accordian/Accodian";

class App extends Component {
  render() {

    return (
      <div className="center">
        <Accordian data={Content.data} />
      </div>
    );
  }
}

export default App;
