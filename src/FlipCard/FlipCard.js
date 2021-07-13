import React from "react";
import "./Styles.css";
// import avatar from "./avatar.png";

const FlipCard = ({ profile }) => (
  <div className="cardWrapper">
    <div className="cardContainer">
      <div className="cardFrontSide">
        <img
          src={profile.avatar}
          alt="profile"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <div className="cardBackSide">
        <h3>{profile.holderName}</h3>
        <p>{profile.position}</p>
        <p>{profile.age}</p>
      </div>
    </div>
  </div>
);

export default FlipCard;
