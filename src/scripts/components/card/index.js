import React from "react";
import StyledCardCss from "./StyledCard.css";

const Card = props => {
  return (
    <StyledCardCss>
      <div className="title">{props.title}</div>
      {props.children}
    </StyledCardCss>
  );
};

export default Card;
