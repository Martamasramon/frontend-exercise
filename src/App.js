import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import WeightPlot from "./Plots/WeightPlot";
import ColorPlot from "./Plots/ColorPlot";
import TypePlot from "./Plots/TypePlot";

const App = () => {

  const [plots, setPlots] = useState({
    weight: false,
    type: false,
    color: false
  });

  const show = (e) => {
    const name = e.target.getAttribute('value');

    if(name === "weight") setPlots({
      weight: true,
      type: false,
      color: false
    });
    else if (name === "type") setPlots({
      weight: false,
      type: true,
      color: false
    });
    else setPlots({
      weight: false,
      type: false,
      color: true
    });
}


  return (
    <div>
        <div className="heading">
          <h1>Olive Groves</h1>
          <h2>Lets analyse our olive trees!</h2>
        </div>

        <Dropdown>
          <Dropdown.Toggle className="btn-secondary">
            Choose parameter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#" value="weight" onClick={e => {show(e)}}>Weight</Dropdown.Item>
            <Dropdown.Item href="#" value="type" onClick={e => {show(e)}}>Types of trees</Dropdown.Item>
            <Dropdown.Item href="#" value="color" onClick={e => {show(e)}}>Color</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {plots.weight && <WeightPlot/>}
        {plots.type && <TypePlot/>}
        {plots.color && <ColorPlot/>}

  </div>
  );
}

export default App;
