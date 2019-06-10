import React from "react";
import StyledCardCss from "./StyledCard.css";

const Card = React.forwardRef((props, ref) => {
  return (
    <StyledCardCss id={props.id} ref={ref}>
      <div className="title">{props.title}</div>
      {props.children}
    </StyledCardCss>
  );
});

export default Card;
