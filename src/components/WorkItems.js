import React from 'react'
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
//import Ptext from './Ptext';

const ItemStyles = styled.div`
  text-align: center;
  .workItem__icon {
    svg {
      width: 3rem;
    }
  }
  .worksItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .worksItem__subtitle {
    font-size: 1rem;
    font-family: 'Montserrat SemiBold';
  }
  .worksItem__desc {
    font-size: 1.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function WorkItems({
    icon = <MdDesktopMac />,
    title = 'Software Developer',
    subtitle="company",
    desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
  }) {
    return (
      <ItemStyles className="worksItem">
        <div className="workItem__icon">{icon}</div>
        <div className="worksItem__title">{title}</div>
        <div className="worksItem__subtitle">{subtitle}</div>
        {/* <Ptext>{desc}</Ptext> */}
        <div className="para">
        <div className="worksItem__desc">{desc}</div>
        </div>
      </ItemStyles>
    );
  }
