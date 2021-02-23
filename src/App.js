import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import WeightPlot from "./Plots/WeightPlot";
import ColorPlot from "./Plots/ColorPlot";
import TypePlot from "./Plots/TypePlot";

const App = () => {

  return (
    <div>
        <div className="heading">
          <h1>Olive Groves</h1>
          <h2>Lets analyse our olive trees!</h2>
        </div>

    <Carousel>

      <Carousel.Item>
          <WeightPlot/>
      </Carousel.Item>

      <Carousel.Item>
        <TypePlot/>
      </Carousel.Item>

      <Carousel.Item>
        <ColorPlot/>
      </Carousel.Item>
    </Carousel>

  </div>
  );
}

export default App;
