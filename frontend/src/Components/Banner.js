import React from "react";
import "../App.css";
import Carousel from 'react-bootstrap/Carousel';
import marriedCouple from '../Images/marriedCouple.jpg'

function Banner() {
  return (
    <div className="bannerdiv">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div className="marriedCoupleImagediv">
          <img
            className="marriedCoupleImage"
            src={marriedCouple}
            alt="Married Couple"
          />
          <Carousel.Caption className="marriedCoupleCaption">
            <h3 style={{fontSize:"2.5rem"}}>Trusted Matrimony & Matchmaking Service</h3>
          </Carousel.Caption>
          </div>
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
