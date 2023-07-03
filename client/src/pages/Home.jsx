import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import ProductBanner from "../components/ProductBanner/ProductBanner";
import IconBoxes from "../components/IconBoxes/IconBoxes";

function Home() {
  return (
    <div>
      <Navbar />
      <OfferBanner />
      <ProductBanner />
      <IconBoxes/>
    </div>
  );
}

export default Home;
