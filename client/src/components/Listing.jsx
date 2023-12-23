import React from "react";
import Product from "./Product";
import carimg1 from "../../public/images-main/car11-660x440.jpg";
import carimg2 from '../../public/images-main/car12-660x440.jpg'
import carimg3 from '/images-main/car14-660x440.jpg'
import carimg4 from '/campbell-3ZUsNJhi_Ik-unsplash.jpg'
import carimg5 from '/sven-d-a4S6KUuLeoM-unsplash.jpg'

function Listing() {
  return (
    <div className="listing-p">
      <h3>The Most Searched SUV Cars</h3>
      <p className="px-o">
        <a href={"https://google.com/"}>View All</a>
      </p>
      <div className="products">
        <Product
          carimg={carimg1}
          carname={"Ford Gtx 400"}
          cardes={"3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate"}
          carprice={"$50,000"}
        />
      
        <Product
          carimg={carimg2}
          carname={"Toyota Camry 2024 Model"}
          cardes={"Latest Toyota Camry Model For Next Year "}
          carprice={"$30,000"}
        />
        <Product
          carimg={carimg3}
          carname={"GLK 2023 Model"}
          cardes={"Mecerdes Benz GLK 400 2023 Model"}
          carprice={"$65,000"}
        />
      </div>
      <div className="products">

      <Product
          carimg={carimg4}
          carname={"Porche Gtx Roadstar 2024"}
          cardes={"4.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate"}
          carprice={"$450,000"}
        />
      <Product
          carimg={carimg4}
          carname={"Porche Gtx Roadstar 2024"}
          cardes={"4.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate"}
          carprice={"$450,000"}
        />
        <Product
          carimg={carimg5}
          carname={"RAM OfRoad 2024"}
          cardes={"4.0 D6 PowerPulse Momentum 5dr AWD Geartronic Estate"}
          carprice={"$40,000"}
        />
      </div>
    </div>
  );
}

export default Listing;
