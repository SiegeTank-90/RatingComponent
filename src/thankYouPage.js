import React from "react";
import ThankYouImg from "./images/illustration-thank-you.svg";

function ThankYouPage(props) {
  return (
    <div className="FlexContainer">
      <div className="ContainerThankYou">
        <img src={ThankYouImg} alt="Thank You Img" />
        <div className="scoreResultContainer">
          <p className="scoreResult">You Selected {props.currentRating} out of 5 </p>{" "}
        </div>
        <h3 className="ratingHeader">Thank You!</h3>
        <p className="ratingParagraph">
          We appreciate you taking the time to give a rating if you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default ThankYouPage;
