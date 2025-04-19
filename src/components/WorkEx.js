import React from 'react'
import { MdDesktopMac,MdCloudQueue, MdPeopleOutline } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import WorkItems from './WorkItems';


const WorkItemsStyles = styled.div`
  padding: 10rem 0;
  .works__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .works__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
export default function WorkEx() {
    return (
      <WorkItemsStyles>
        <div className="container">
          <SectionTitle subheading=" " heading="Experience" />
          <div className="works__allItems">
      <WorkItems
              icon={<MdPeopleOutline />}
              title="AI Solutions Architect 2"
              subtitle="theLender -Feb 2025- Present"
              desc=""
            />
       <WorkItems
              icon={<MdCloudQueue />}
              title="AI Developer Intern"
              subtitle="Fetchrocket -July 2024- Jan 2025"
              desc=""
            />
            <WorkItems
              icon={<MdDesktopMac />}
              title="Software Developer"
              subtitle="Eduvanz Financing Pvt Ltd- Nov 2020- Sept 2020"
              desc=""
            />
            
            <WorkItems
              icon={<MdPeopleOutline />}
              title="Junior Data Scientist"
              subtitle="Eduvanz Financing Pvt Ltd- Sept 2022- July 2023"
              desc=""
            />
           
          </div>
        </div>
      </WorkItemsStyles>
    );
  }
