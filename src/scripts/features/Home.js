import React, { useRef } from "react";
import Card from "../components/card";
import ReactTable from "react-table";

import "react-table/react-table.css";
import Header from "./Header";

// styled
import StyledHome from "./Home.css";
import { titleToId } from "../util";

const Home = ({ data }) => {
  let refs = [React.createRef(), React.createRef()];

  return (
    <StyledHome>
      <Header refs={refs} />
      {data.map((league, i) => {
        const title =
          Object.keys(league)[0] === "AL"
            ? "American League"
            : "National League";
        return (
          <Card key={i} title={title} id={titleToId(title)} ref={refs[i]}>
            {perLeague(league)}
          </Card>
        );
      })}
    </StyledHome>
  );
};

export default Home;

const perLeague = league => {
  const id = Object.keys(league);

  return Object.keys(league[id]).map((division, i) => {
    return (
      <ReactTable
        key={i}
        style={{ width: "100%", textAlign: "center", fontSize: "16px" }}
        resizable={false}
        pageSize={5}
        data={league[id][division]}
        showPagination={false}
        className="-striped -highlight"
        defaultSorted={[
          {
            id: "col-wins",
            desc: true
          }
        ]}
        columns={[
          {
            Header: division,
            headerClassName: "column-header-group",
            columns: [
              {
                Header: "Team",
                id: "col-team",
                accessor: d => d.team,
                className: "data-cell"
              },
              {
                Header: "Wins",
                id: "col-wins",
                accessor: d => d.wins,
                className: "data-cell"
              },
              {
                Header: "Losses",
                id: "col-losses",
                accessor: d => d.losses,
                className: "data-cell"
              }
            ]
          }
        ]}
      />
    );
  });
};
