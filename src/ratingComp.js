import React, { useState } from "react";
import RatingPage from "./ratingPage.js";
import ThankYouPage from "./thankYouPage.js"
import "./App.css";
import starIcon from "./images/icon-star.svg";
import RatingSelector from "./ratingSelector.js";

function RatingComp() {
  const [page, setPage] = useState(0);
  const [currentRating, setcurrentRating] = useState(0);

  if ((page == 0)) {
    return (
      <RatingPage
        currentRating={currentRating}
        setcurrentRating={setcurrentRating}
        setPage={setPage}
      />
    );
  } else {
    return (
    <ThankYouPage currentRating={currentRating} />
  )}
}

export default RatingComp;
