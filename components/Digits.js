import React from "react";

const Digits = () => {
  return (
    <div className=" relative text-[35px] text-white flex justify-between ">
      <div className=" flex gap-[10px] justify-evenly flex-1 ml-4 mr-6 ">
        <div className=" z-10   flex flex-col justify-evenly border-solid border-[4px] border-[#787878] rounded-[14px] pl-[7px] pr-[7px] gap-[12px]">
          <button>7</button>
          <button>4</button>
          <button>1</button>
        </div>
        <div className=" z-20 flex flex-col justify-evenly border-solid border-[4px] border-white rounded-[14px] pl-[7px] pr-[7px] gap-[12px]">
          <button>8</button>
          <button>5</button>
          <button>2</button>
        </div>
        <div className=" z-10 flex ml-[2px] flex-col justify-evenly border-solid border-[4px] border-[#787878] rounded-[14px] pl-[7px] pr-[7px] gap-[12px] ">
          <button>9</button>
          <button>6</button>
          <button>3</button>
        </div>
      </div>
      <div className="flex flex-col mr-4 border-solid border-[4px] border-[#787878] rounded-[14px] p-2">
        <button>x</button>
        <button>-</button>
        <button>+</button>
      </div>
      <div className=" absolute w-[100%] h-[100%] top-0 text-[35px] text-white flex justify-between  ">
        <div className=" gap-[10px] flex flex-col justify-evenly flex-1 ml-[30px] mr-[38px] ">
          <div className="flex h-[40px] justify-evenly border-solid border-[4px] border-[#787878] rounded-[14px] ">
            <button className="opacity-0">7</button>
            <button className="opacity-0">4</button>
            <button className="opacity-0">1</button>
          </div>
          <div className=" z-0 flex h-[40px] mt-[4px] justify-evenly border-solid border-[4px] border-white rounded-[14px] ">
            <button className="opacity-0">8</button>
            <button className="opacity-0">5</button>
            <button className="opacity-0">2</button>
          </div>
          <div className="flex h-[40px] mt-[2px] justify-evenly border-solid border-[4px] border-[#787878] rounded-[14px]  ">
            <button className="opacity-0">9</button>
            <button className="opacity-0">6</button>
            <button className="opacity-0">3</button>
          </div>
        </div>
        <div className="flex flex-col mr-4 border-solid border-[4px] border-[#787878] rounded-[14px] p-2">
          <button className="opacity-0">x</button>
          <button className="opacity-0">-</button>
          <button className="opacity-0">+</button>
        </div>
      </div>
    </div>
  );
};

export default Digits;
