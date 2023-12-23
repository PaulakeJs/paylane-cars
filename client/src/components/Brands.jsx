import React from "react";
import b1 from "/images-main/b1.jpg";
import b2 from "/images-main/b2.jpg";
import b3 from "/images-main/b3.jpg";
import b4 from "/images-main/b4.jpg";

function Brands() {
  return (
    <div className="brands">
      <div className="ex">
        <h3 className="mark">Explore Our Premium Brands</h3>
        <p className="mark">View All</p>
      </div>
      <div className="flex-brand">
        <div className="j">
          <img src={b1} alt="" />
          <p className="carb">Audi</p>
        </div>
        <div className="j">
          <img src={b2} alt="" />
          <p className="carb">B M W</p>
        </div>
        <div className="j">
          <img src={b3} alt="" />
          <p className="carb">Ford</p>
        </div>
        <div className="j">
          <img src={b4} alt="" />
          <p className="carb">Benz</p>
        </div>
      </div>
    </div>
  );
}

export default Brands;
