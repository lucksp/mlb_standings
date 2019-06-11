import React, { useState, useEffect } from "react";

import Home from "./Home";
import { fetchWrapper } from "../api";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const mlbData = await fetchWrapper("api/data").then(response => {
        try {
          return JSON.parse(response.body);
        } catch (e) {
          console.warn(e);
          return [];
        }
      });
      let sorted;
      if (mlbData.length) {
        sorted = groupBy(mlbData, "league");
      }
      const deepSort = [];
      Object.keys(sorted).map(league => {
        deepSort.push({ [league]: groupBy(sorted[league], "division") });
      });
      setData(deepSort);
    }

    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Home data={data} />
    </React.Fragment>
  );
};

export default App;

const groupBy = function(array, sortProp) {
  return array.reduce(function(acc, obj) {
    var key = obj[sortProp];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};
