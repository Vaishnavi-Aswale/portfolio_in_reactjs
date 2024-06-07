import React from 'react'
import styled from 'styled-components';
import PText from '../components/Ptext';
import AboutImg from '../assets/images/vaish.jpg';
import TravelImg from '../assets/images/travel.jpg';
import AdventureImg from '../assets/images/adventure.jpg';
import FoodImg from '../assets/images/food.png';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .aboutImgStyle {
      border: 2px solid var(--gray-1);
  }
  .imageAdvStyle{
    margin-top: 100px;
    block-size: 400px;
  }
  .imageStyle{
    margin-top: 100px;
    block-size: 400px;
  }
  .imageFoodStyle{
    margin-top: 100px;
    border: 2px solid var(--gray-1);
    width: 400px;
    height: 500px;
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .download_cv{
    font-size: 2.2rem;
    background-color: 'var(--gray-1)' ;
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: 'black';
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .download_cv {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
    return (
        <>
      <AboutPageStyles>
        <div className="container">
            <div className="top-section">
                <div className="left">
                    <p className="about__subheading">
                        Hi, I am <span>Vaishnavi Aswale</span>
                    </p>
                    <h2 className="about__heading">Data & Software Enthusiast</h2>
                    <div className="about__info">
                            <PText>
                            My innate nature to ponder over a problem and zeal to solve them with innovative ideas led me to pursue engineering.
                            <br /> <br />
                            At Eduvanz, I developed a customer data verification app that boosted revenue by 65%, integrated third-party APIs, created a comprehensive dashboard, and optimized SQL queries, achieving a 79% improvement in performance. 
                            <br />  <br />
                            I leveraged Python and SQL to develop robust ETL data pipelines, streamlining data processing and enhancing operational efficiency. I also built a loan default prediction model, which contributed to better risk management and decision-making processes.
                             <br />
                            <br />
                            Now, pursuing a Master&apos;s in Information Technology at ASU, I am passionate about technology and eager to innovate.
                            </PText>
                    </div>
                    <div className="download_cv">
                        <a href="https://drive.google.com/file/d/1B-qkEGEakZ1BGeGGYQIG1XGHTJHo2zGH/view?usp=share_link">Download Resume</a>
                    </div>
                </div>
                <div className="right">
                    <img src={AboutImg} className="aboutImgStyle" alt="me" />
                </div>
           </div>
        </div>
        <div className="container">
            <div className="top-section">
              <div className="left">
                <img src={TravelImg} className="imageStyle" alt="me" />
              </div>
              <div className="right">
                  <div className="about__info">
                      <PText>
                          Also, I like to travel alot!
                      </PText>
                  </div>
              </div>   
            </div>
        </div>
        <div className="container">
            <div className="top-section">
                <div className="left">
                    <div className="about__info">
                        <PText>
                            And when adventure calls, I definitely answer!
                        </PText>
                    </div>
                </div>
                <div className="right">
                    <img src={AdventureImg} className="imageAdvStyle" alt="me" />
                </div>   
           </div>
        </div>
        <div className="container">
            <div className="top-section">
              <div className="left">
                <img src={FoodImg} className="imageFoodStyle" alt="me" />
              </div>
              <div className="right">
                  <div className="about__info">
                      <PText>
                      Bon Appétit! Good food is good mood :D
                      </PText>
                  </div>
              </div>   
            </div>
        </div>
      </AboutPageStyles>
    </>
    )
}
