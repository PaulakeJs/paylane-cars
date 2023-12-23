import React from "react";
import gif1 from "/gifs/f1.svg";
import gif3 from '/gifs/f3.svg'
import gif4 from '/gifs/f4.svg'
import gif2 from '/gifs/f2.svg'

function Matters() {
  return (
    <div className="matters">
      <div className="onp">
        <h1 className="mattext">We're BIG on what matters to you</h1>
      </div>
      <div className="gif-icons">
        <div className="gif-1">
          <div className="m-g">
            <img src={gif1} alt="" />
            <h3 className="james">Trusted Car Dealership</h3>
            <span className="john">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </span>
          </div>{" "}
          <div className="m-g">
            <img src={gif2} alt="" />
            <h3 className="james">Special Financing Offers</h3>
            <span className="john">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </span>
          </div>
        </div>
        <div className="gif-1">
          <div className="m-g">
            <img src={gif3} alt="" />
            <h3 className="james">Transparent Pricing</h3>
            <span className="john">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </span>
          </div>{" "}
          <div className="m-g">
            <img src={gif4} alt="" />
            <h3 className="james">Expert Car Service</h3>
            <span className="john">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matters;
