import React from "react";
import styled from "styled-components";
import { StepperProps, StyledStepProps } from "./types";

const Container = styled.div<StyledStepProps>`
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-basis: 0;
  &:after {
    content: "";
    position: absolute;
    background: ${(props) =>
      props.isCompleted ? props.theme.primary : "#f1f1f1"};
    display: block;
    width: 100%;
    height: 5px;
    top: 10px;
    z-index: 1;
  }
  &:last-child {
    &::after {
      background: transparent;
    }
  }
`;

const Step = styled.span<StyledStepProps>`
  width: 20px;
  height: 20px;
  line-height: 22px;
  display: inline-block;
  border-radius: 25px;
  background: ${(props) => (props.isCompleted ? props.theme.primary : "#fff")};
  border: ${(props) =>
    `2px solid ${
      props.isActive ? props.theme.primary : props.theme.secondary
    }`};
  color: ${(props) =>
    props.isCompleted
      ? props.theme.primaryTextColor
      : props.isActive
      ? props.theme.primary
      : props.theme.secondary};
  z-index: 2;
  position: absolute;
  left: 0;
  text-align: center;
  font-size: 14px;
`;

/**
 * Stepper Wizard
 */
const Stepper: React.FC<StepperProps> = ({ index, activeStep }) => {
  return (
    <Container isCompleted={activeStep > index}>
      <Step isActive={activeStep === index} isCompleted={activeStep > index}>
        {index + 1}
      </Step>
    </Container>
  );
};

export default Stepper;
