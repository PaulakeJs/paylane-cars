import { Button } from "antd";
import React from "react";

function Lookout() {
  return (
    <div className="lookout">
      <div className="buy">
        <h2 className="lookout-h2">
          Are You Looking <br /> For a Car ?
        </h2>
        <p className="l-p">
          We are committed to providing our customers with exceptional service
        </p>
        <Button>Get Started</Button>
      </div><div className="sell">
        <h2 className="lookout-h2">
          Wanna sell <br /> your Car ?
        </h2>
        <p className="l-p">
          We are committed to providing our customers with exceptional service
        </p>
        <Button className="black">Get Started</Button>
      </div>
    </div>
  );
}

export default Lookout;
