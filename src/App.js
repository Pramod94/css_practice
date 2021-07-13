import React, { Component } from "react";
import "./App.css";
import FlipCard from "./FlipCard/FlipCard";
import avatar from "./avatar.png";

class App extends Component {
  render() {
    const profile = {
      avatar: avatar,
      holderName: "PMD",
      position: "Software Engg",
      age: "27",
    };

    return (
      <div>
      <div className="center">
        <h2 style={{ padding: "20px" }}>FlipCard</h2>
        <FlipCard profile={profile} />
      </div>
      </div>
    );
  }
}

export default App;
