import React from "react";
import PropTypes from "prop-types";

// styled
import StyledCardCss from "./StyledCard.css";

const Card = React.forwardRef((props, ref) => {
  return (
    <StyledCardCss id={props.id} ref={ref}>
      <div className="title">{props.title}</div>
      {props.children}
    </StyledCardCss>
  );
});

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Card;
