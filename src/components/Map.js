import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/vaMap.JPG';
import PText from './Ptext';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here I am!</h3>
          <PText>Mumbai,Maharashtra</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/AMRUT+PARK,+Wayle+Nagar,+Gandhar+Nagar,+Khadakpada,+Kalyan,+Maharashtra+421301/@19.2543115,73.1326394,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7967df670c7fb:0x234ccac001feed0f!8m2!3d19.254512!4d73.1347761"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
