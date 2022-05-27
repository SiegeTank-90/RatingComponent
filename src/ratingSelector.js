import React from "react";

function RatingSelector(props) {
  
  let activeRating = "rating";
  if (props.index == props.currentRating) {
    activeRating = "rating-active";
  }

  function Toggle() {
    
    props.setcurrentRating(props.index) 

    
    
  }

  return (
    <button className={activeRating} onClick={() => Toggle()}>
      {props.value}
    </button>
  );
}

export default RatingSelector;
