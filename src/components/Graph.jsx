import React from "react";
import { Bar } from "react-chartjs-2";

const Graph = ({ graphData, complete, country }) => {
  if (complete) {
    return (
      <div className={"graphData"}>
        <h2>COVID-19 Graph for {country}</h2>
        <Bar
          data={graphData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default Graph;
