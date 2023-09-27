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
              subtitle="Eduvanz Financing Pvt Ltd- Nov 2020- Sept 2020"
              desc="I developed a customer data verification application using HTML, CSS, JavaScript, and PHP, resulting in a 65% revenue increase by streamlining loan applications. I improved project functionality by contributing to Laravel and CodeIgniter frameworks, optimized heavy SQL queries by 79%, and integrated third-party APIs for efficient collaboration using Git and JIRA."
            />
            
            <WorkItems
              icon={<MdPeopleOutline />}
              title="Junior Data Scientist"
              subtitle="Eduvanz Financing Pvt Ltd- Sept 2022- July 2023"
              desc="I leveraged advanced SQL queries to analyze loan default predictions, achieving a 25% accuracy improvement through data preprocessing and Random Forest Algorithm. I spearheaded the creation of a Power BI dashboard, resulting in a 10% revenue boost through data-driven insights. Designed, validated, and implemented Python and SQL data pipelines for precise analysis and reporting in business operations."
            />
            <WorkItems
              icon={<MdCloudQueue />}
              title="Cloud Intern"
              subtitle="iFuture Technologies -2 months"
              desc="I established a client-server setup in a private cloud, linking devices via LAN, with one as the server and the rest as clients, all on Microsoft Server OS. I also managed the deployment of a cloud app, ensuring seamless access and performance on client devices."
            />
          </div>
        </div>
      </WorkItemsStyles>
    );
  }
