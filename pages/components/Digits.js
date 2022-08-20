import React from "react";
import { useState } from "react";

function Digits() {
  const [calc, setCalc] = useState("");

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(<button>{i}</button>);
    }

    return digits;
  };

  return <div></div>;
}

export default Digits;
