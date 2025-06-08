import React from 'react';
import { MdDesktopMac, MdCloudQueue, MdPeopleOutline } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import WorkItems from './WorkItems';

const WorkItemsStyles = styled.div`
  padding: 10rem 0;

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .works__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 4rem;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .works__allItems {
      grid-template-columns: 1fr;
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
            subtitle="theLender - Feb 2025 – May 2025"
            // desc="Designed and deployed AI-driven solutions for loan processing workflows using LLMs, XGBoost, and AWS Bedrock. Integrated GPT-based APIs to automate financial Q&A systems."
          />
          <WorkItems
            icon={<MdCloudQueue />}
            title="AI Developer Intern"
            subtitle="Fetchrocket - July 2024 – Jan 2025"
            // desc="Built LLM-powered chat and voice apps using OpenAI, Langchain, and Gemini. Integrated Pinecone and Redis to boost performance and scalability by 30%."
          />
          <WorkItems
            icon={<MdDesktopMac />}
            title="Software Developer"
            subtitle="Eduvanz Financing Pvt Ltd - Nov 2020 – Sept 2022"
            // desc="Developed customer verification systems using React and Java. Built scalable REST APIs with Spring Boot and enhanced DB performance by 25% using optimized SQL and caching."
          />
          <WorkItems
            icon={<MdPeopleOutline />}
            title="Junior Data Scientist"
            subtitle="Eduvanz Financing Pvt Ltd - Sept 2022 – July 2023"
            // desc="Built machine learning models for loan risk prediction using Python and SQL. Designed ETL pipelines and a virtual GPT-based assistant to cut support response times by 60%."
          />
        </div>
      </div>
    </WorkItemsStyles>
  );
}
