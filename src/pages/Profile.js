import React from 'react';
import styled from 'styled-components';
//import PText from '../components/Ptext';
//import AboutImg from '../assets/images/vaish.jpg';
import ProfileInfoItem from '../components/ProfileInfoItem';
import ContactBanner from '../components/ContactBanner';
import WorkEx from '../components/WorkEx';

const ProfilePageStyles = styled.div`
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
  .about__info__items {
    margin-top: 0rem;
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

export default function Profile() {
  return (
    <>
      <ProfilePageStyles>
        <div className="container">
          {/* <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Vaishnavi Aswale</span>
              </p>
              <h2 className="about__heading">Software developer</h2>
              <div className="about__info">
                <PText>
                I reside in Mumbai, the financial hub of the country!
                Currently working at a FinTech startup- Eduvanz as a Software developer.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>

              <div className="download_cv">
                <a href="https://drive.google.com/file/d/1JN-g1wWijv8JjvF6oT4xImckx1ZJHFPo/view?usp=sharing">Download Resume</a>
              </div>
             </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div> */}
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>
              <ProfileInfoItem
                title="Analytics"
                items={['Tableau','Python =>','Numpy,Pandas,SciKit learn,Matplotlib,Seaborn']}
              />
              <ProfileInfoItem
                title="BackEnd"
                items={['PHP', 'Python', '.NET']}
              />
              <ProfileInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT JS']}
              />
              <ProfileInfoItem
                title="Database"
                items={['MySQL', 'SQLite', 'Oracle', 'Firebase']}
              />
              <ProfileInfoItem
                title="Cloud"
                items={['AWS- S3,RDS,EC2,ELK']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Certifications</h1>
              <ProfileInfoItem
                title="Coursera"
                items={['IBM Data Science Professional Certification']}
              />
              <ProfileInfoItem
                title="Oracle"
                items={['Oracle Autonomous Database Cloud 2019 Certified']}
              />
              <ProfileInfoItem
                title="Coursera "
                items={['Visual Analytics with Tableau']}
              />
              <ProfileInfoItem
                title="Udemy"
                items={['Artificial Intelligence and Predictive analysis with Python']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <ProfileInfoItem
                title="School"
                items={['Don Bosco High School','SSC- 92.4%']}
              />
              <ProfileInfoItem
                title="HSC"
                items={['Birla College','80.7%']}
              />
              <ProfileInfoItem
                title="B.E"
                items={['Vidyalankar Institute of Technology','Information Technology- 8.81']}
              />
              
            </div>
          </div>
        </div>
        <WorkEx/>
        <ContactBanner />
      </ProfilePageStyles>
    </>
  );
}
