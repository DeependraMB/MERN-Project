import React from "react";
import { useEffect, useState } from "react";
import "./offerBanner.css";

const imageUrls = [
  "https://images.pexels.com/photos/1275227/pexels-photo-1275227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2s",
  "https://images.pexels.com/photos/16255724/pexels-photo-16255724/free-photo-of-close-up-of-a-flying-drone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/11882783/pexels-photo-11882783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

function OfferBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrls[currentImageIndex]})`,
    animation: "fade 1s linear forwards",
  };

  return (
    <div className="container">
      <div className="offerbanner-container" style={backgroundImageStyle}>
        <p>
          A new online shop
          <br />
          experience
        </p>
        <h4>
          Inspiring Connections: Empowering through Technology
          <br />
          Unlocking Potential, Enabling Progress: Embrace the Power of
          Technology
        </h4>
        <button
          className="btn btn-lg btn-outline-light"
          style={{ width: "250px", height: "50px" }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default OfferBanner;
