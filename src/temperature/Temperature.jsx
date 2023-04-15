import React, { useState } from "react";
import styled from "styled-components";

export const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(20);
  const [temperatureColor, settemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    if (newTemperature >= 31) return;

    if (newTemperature >= 15 && newTemperature < 25) {
      settemperatureColor("hot");
    } else if (newTemperature >= "25") {
      settemperatureColor("red");
    }
    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    if (newTemperature === -1) return;

    if (newTemperature < 15) {
      settemperatureColor("cold");
    }
    setTemperatureValue(newTemperature);
  };
  return (
    <Div>
      <div className={`div ${temperatureColor}`}>{temperatureValue + "`C"}</div>
      <span>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </span>
    </Div>
  );
};

const Div = styled.div`
  width: 200px;
  height: 300px;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .div {
    width: 200px;
    height: 200px;
    background-color: #bc8b20c8;
    border-radius: 50%;
    box-sizing: border-box;
    padding-top: 60px;
    color: white;
    border: 3px solid white;
    font-size: 60px;
    transition: 1s;
  }
  .cold {
    background-color: blue;
  }
  .hot {
    background-color: brown;
  }
  .red {
    background-color: red;
  }
  span {
    display: flex;
    gap: 20px;
    button {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid white;
      background-color: silver;
      margin-top: 20px;
    }
  }
`;
