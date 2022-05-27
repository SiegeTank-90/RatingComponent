import React, { useState } from "react";
import "./App.css";
import starIcon from "./images/icon-star.svg";
import RatingSelector from "./ratingSelector.js";

function RatingPage(props) {

  let ratingsArray = [];

  for (let i = 1; i < 6; i++) {
    ratingsArray.push(
      <RatingSelector
        value={i}
        index={i}
        currentRating={props.currentRating}
        setcurrentRating={props.setcurrentRating}
      />
    );
  }
  

  return (
    <div>
      <div className="Container">
        <div className="starContainer">
          <img className="starIcon" src={starIcon} alt="star icon"></img>
        </div>
        <h3 className="ratingHeader">How did we do?</h3>
        <p className="ratingParagraph">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div>
          <div className="ratingSelectorContainer">{ratingsArray}</div>
        </div>
        <button
          className="submitButton"
          onClick={() => props.setPage(1)}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default RatingPage;