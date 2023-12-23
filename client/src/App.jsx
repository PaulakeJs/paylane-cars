import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Listing from "./components/Listing";
import Lookout from "./components/Lookout";
import Matters from "./components/Matters";
import Customers from "./components/Customers";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function App() {

  return <>
  <Header/>
  <Banner/>
  <Listing/>
  <Lookout/>
  <Matters/>
  <Customers/>
  <Brands/>
  <Footer/>
  </>;
}

export default App;
