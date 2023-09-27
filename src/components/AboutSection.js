import React from 'react'
import PText from './Ptext'
import SectionTitle from './SectionTitle'
import Button from './Button';
import AboutImg from '../assets/images/va.jpg';
import styled from 'styled-components';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
    return (
        <AboutSectionStyles>
            <div className="container">
                <div className="aboutSection__left">
                <SectionTitle 
                    subheading="Let me introduce myself"
                    heading="Hello World!"
                />
                <PText>
                I am Vaishnavi Aswale, a tech enthusiast with a Bachelor's degree in Information Technology, graduated in 2020. Currently pursuing a Master's in Information Technology at ASU, I've amassed 2.9 years of professional experience. I began as a Software Development Engineer at Eduvanz, a fintech startup, and later transitioned into the role of Junior Data Scientist.
                </PText>
                <div className="aboutSection__buttons">
                    <Button btnText="Profile" btnLink="/profile" />
                    <Button btnText="Read More" btnLink="/about" outline />
                </div>
                </div>
                
           
                <div className="aboutSection__right">
                    <img className="aboutImg" src={AboutImg} alt="Img" />
                </div>
            </div>
        </AboutSectionStyles>
    )
}
