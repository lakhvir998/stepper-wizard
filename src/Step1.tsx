import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

/**
 * Stepper Wizard
 */
const Step1: React.FC = () => {
  return (
    <Container>
      <h1>Step 1</h1>
    </Container>
  );
};

export default Step1;
