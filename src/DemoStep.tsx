import React from "react";
import styled from "styled-components";

export interface DemoProps {
  title: string;
}

const Container = styled.div`
  display: flex;
`;

/**
 * Stepper Wizard
 */
const DemoStep: React.FC<DemoProps> = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

export default DemoStep;
