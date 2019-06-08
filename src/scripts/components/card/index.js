import React from "react";
import StyledCardCss from "./StyledCard.css";

const Card = props => {
  return <StyledCardCss>{props.children}</StyledCardCss>;
};

export default Card;
