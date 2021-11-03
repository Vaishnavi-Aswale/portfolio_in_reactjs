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
              icon={<MdDesktopMac />}
              title="Software Developer"
              subtitle="Eduvanz Financing Pvt Ltd- 2nd Nov- Present"
              desc="Writing server side logic in PHP and developing website using HTML,CSS,JQUERY,AJAX. 
                Building Rest apis in php and using postman for development, Performing SQL operations on relational database via MySQL Workbench,Integration with third party APIs,GIT for version control,Perform daily scrums & routine code reviews."
            />
            <WorkItems
              icon={<MdCloudQueue />}
              title="Cloud Intern"
              subtitle="iFuture Technologies -2 months"
              desc="Installation and configuration of client and server
                Network Management
                Planning, design and development of an application on Cloud
                Worked with virtualization technology
                Applied Knowledge of networking concepts (e.g., DNS, TCP/IP, and firewalls)"
            />
            <WorkItems
              icon={<MdPeopleOutline />}
              title="Marketing Intern"
              subtitle="Alterego -2 months"
              desc="Market Research including collecting data on consumers, consolidating information into actionable items, reports and presentations.
                SWOT analysis. Also involved in making their strategy, work plan, funding model.
                Developed project management skills
                Implemented the 7 p's of marketing and evaluated various marketing strategies for Alterego"
            />
          </div>
        </div>
      </WorkItemsStyles>
    );
  }
