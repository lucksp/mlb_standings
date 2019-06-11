export const LEAGUE_ID = {
  AMERICAN: "american_league",
  NATIONAL: "national_league"
};

export const titleToId = string =>
  string.toLowerCase() === "american league"
    ? LEAGUE_ID.AMERICAN
    : LEAGUE_ID.NATIONAL;
