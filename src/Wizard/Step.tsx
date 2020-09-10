import React from "react";
import styled from "styled-components";
import { StepProps } from "./types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.h1``;

const StepContent = styled.div``;

/**
 * Stepp Component
 */
const Step: React.FC<StepProps> = ({ id, component, label, active }) => {
  if (!active) return null;
  return (
    <Container>
      <Label>{label}</Label>
      <StepContent>{component}</StepContent>
    </Container>
  );
};

export default Step;
