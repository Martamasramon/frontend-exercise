import React, {Component} from "react";
import Data from "../olive_stats.json";
import Plot from 'react-plotly.js';

class WeightPlot extends Component {

  render(){
  // See how much data there is
  const len = Data.length;
  const weight = [];

  // Get only the the weight data
  for (var i = 0; i < len; i++) {
    weight[i] = Data[i].kg;
  };

  // Set up the histogram parameters
  const data = [
          {
            x: weight,
            name: 'weight',
            autobinx: false,
            histnorm: "count",
            marker: {
              color: "#D38F36",
               line: {
                color:  "B87A28",
                width: 0.5
              }
            },
            opacity: 0.6,
            type: "histogram",
            xbins: {
              end: 500,
              size: 50,
              start: 0
            }
          },
        ];

  // Send the histogram to main App component
  return (
    <div className="histogram">
        <Plot
                data={data}
                layout={ {width: 600, height: 600, title: 'Weight',
                          paper_bgcolor: '#FBF6EF', plot_bgcolor: '#FBF6EF'}
                         }
              />
      </div>
  );
}
}

export default WeightPlot;
