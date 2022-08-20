import React from "react";

function Digits() {
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button className=" flex-[1_1_33.333%]" key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  return (
    <div className="text-[37px] text-white flex flex-wrap ">
      {createDigits()}
    </div>
  );
}

export default Digits;
