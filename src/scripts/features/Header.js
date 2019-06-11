import React from "react";
import PropTypes from "prop-types";

import logo from "../../../public/assets/img/logo.svg";

//styled
import StyledHead from "./Header.css";
import { LEAGUE_ID } from "../util";
import { refType } from "../util/types";

const Header = props => {
  const scrollTo = (e, id) => {
    e.preventDefault();

    const index = props.refs.findIndex(ref => ref.current.id === id);
    if (index >= 0) {
      props.refs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };
  return (
    <StyledHead>
      <div className="header-left">
        <img id="logo" src={logo} />
        <div className="title-page">2018 MLB Final Standings</div>
      </div>
      <div className="header-right">
        <div className="link" onClick={e => scrollTo(e, LEAGUE_ID.AMERICAN)}>
          American
        </div>
        <div className="link" onClick={e => scrollTo(e, LEAGUE_ID.NATIONAL)}>
          National
        </div>
      </div>
    </StyledHead>
  );
};

Header.propTypes = {
  refs: PropTypes.arrayOf(PropTypes.shape({ refType, refType }))
};

export default Header;
