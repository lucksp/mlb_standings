import React, { useState, useEffect } from "react";

import Home from "./Home";
import { dataSet } from "./DATA";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // const mlbData = await fetch(
      //   "https://api.mobileqa.mlbinfra.com/api/interview/v1/records"
      // ).then(response => {
      //   try {
      //     return response.json();
      //   } catch (e) {
      //     console.warn(e);
      //     return [];
      //   }
      // });
      const mlbData = dataSet;
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
  return <Home data={data} />;
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
