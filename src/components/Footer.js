import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './Ptext';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Vaishnavi Aswale</h1>
          <PText>
                Software Developer
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '',
                path: '',
              },
              {
                title: 'vaishnaviaswale051998@gmail.com',
                path: 'mailto:vaishnaviaswale051998@gmail.com',
              },
              {
                title: 'USA',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
              heading="Check out"
            links={[
                {
                title: 'Github',
                path: 'https://github.com/Vaishnavi-Aswale',
               },
               {
                title: 'Tableau',
                path: 'https://public.tableau.com/app/profile/vaishnavi3737',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social"
            links={[
                {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/vaishnavi-aswale/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/VaishnaviAswale',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/vaishnavi.aswale/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/vaishnavi_aswale/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © Vaishnavi Aswale 
            
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
