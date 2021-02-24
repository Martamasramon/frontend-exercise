import React, {Component} from "react";
import Data from "../olive_stats.json";
import Plot from 'react-plotly.js';

class TypePlot extends Component {

  render(){
  // See how much data there is
  const len = Data.length;
  const types = [];

  // Get only the the types of trees data
  for (var i = 0; i < len; i++) {
    types[i] = Data[i].oliveType;
  };

  // Set up the histogram parameters
  const data = [
          {
            x: types,
            name: 'Types of trees',
            autobinx: true,
            histnorm: "count",
            marker: {
              color: "#D38F36",
               line: {
                color:  "B87A28",
                width: 0.5
              }
            },
            opacity: 0.6,
            type: "histogram"
          },
        ];

  // Send the histogram to main App component
  return (
    <div className="histogram">
        <Plot
                data={data}
                layout={ {width: 600, height: 600, title: 'Types of trees',
                          paper_bgcolor: '#FBF6EF', plot_bgcolor: '#FBF6EF'} }
              />
      </div>
  );
}
}

export default TypePlot;
