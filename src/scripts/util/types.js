import PropTypes from "prop-types";

export const teamType = PropTypes.shape({
  division: PropTypes.string,
  league: PropTypes.string,
  losses: PropTypes.number,
  team: PropTypes.string,
  wins: PropTypes.number
});

export const leagueType = PropTypes.shape({
  Central: PropTypes.arrayOf(teamType),
  East: PropTypes.arrayOf(teamType),
  West: PropTypes.arrayOf(teamType)
});

export const refType = PropTypes.shape({
  current: PropTypes.instanceOf(Element)
});
