import React from "react";
import homeImg from "../../assets/homeImg.png";
import Button from "../../Component/Button";

function Banner() {
  return (
    <div
      className="bg-cover h-96 py-80 pl-12"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <div className="text-white text-xl">
        Improve your chances of landing a job in software development and
        machine learning.
      </div>
      <p className="py-3 text-white w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        doloribus, dolores perferendis sequi amet expedita libero enim sunt ipsa
        cum error quo aliquid minus!
      </p>
      <Button>Request to quote</Button>
      {/* <img src={homeImg} alt="homeImg" /> */}
    </div>
  );
}

export default Banner;
