import React from "react";
import Card from "../components/card";

const Home = ({ data }) => {
  return data.map((league, i) => {
    const title =
      Object.keys(league)[0] === "AL" ? "American League" : "National League";
    return <Card key={i}>{props => <div>{title}</div>}</Card>;
  });
};

export default Home;
