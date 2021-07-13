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
      <div className="center">
        <FlipCard profile={profile} />
      </div>
    );
  }
}

export default App;
