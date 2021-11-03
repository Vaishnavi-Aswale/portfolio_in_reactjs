import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
    PText.propTypes = {
        children: PropTypes.node.isRequired,
        };
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle> 
  );
}
