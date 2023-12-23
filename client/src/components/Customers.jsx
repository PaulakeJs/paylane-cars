import React from "react";
import stars from '/images-main/stars.png'

function Customers() {
  return (
    <div className="customers">
      <div>
        <h1>What Our Customers Say</h1>
    <br />
        <p className="p-3x">Great</p>
        <img src={stars} alt="" />
      </div>
      <div className="reviews">
        <span className="vvb">verified</span>
        <h2>ALI JAMES</h2>
        <span>designer</span>
        <p className="review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam cumque, magnam temporibus in sed modi. Odit quaerat tenetur, incidunt ratione iusto
        </p>
      </div>
    </div>
  );
}

export default Customers;
