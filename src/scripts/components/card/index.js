import React from "react";
import StyledCardCss from "./StyledCard.css";

const Card = props => {
  return <StyledCardCss>{props.children(props)}</StyledCardCss>;
};

export default Card;
