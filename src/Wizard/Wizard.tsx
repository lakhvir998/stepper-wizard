import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { WizardProps, StyledButtonProps } from "./types";
import Step from "./Step";
import Stepper from "./Stepper";
import themes from "./theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.primary};
  border: 1px solid #ddd;
`;

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ActionContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
`;

const Button = styled.button<StyledButtonProps>`
  background: none;
  border: 1px solid
    ${(props) => (props.primary ? props.theme.primary : props.theme.secondary)};
  background-color: ${(props) =>
    props.primary ? props.theme.primary : props.theme.secondary};
  color: ${(props) => props.theme.primaryTextColor};
  padding: 10px 20px;
  font-size: 18px;
  margin-left: 10px;
`;

/**
 * Stepper Wizard
 */
const Wizard: React.FC<WizardProps> = ({
  steps,
  activeStep,
  dark = false,
  showStepByStepLegend = true,
  onStepChange,
  onSuccess = () => {},
}) => {
  const theme = dark ? themes.dark : themes.light;

  /**
   * Function move to next step
   * @return void
   */
  const handleNext = () => {
    const step = activeStep + 1;
    onStepChange(step);
    if (finalStep(step)) {
      onSuccess();
    }
  };

  /**
   * Function move to previous step
   * @return void
   */
  const handleBack = () => {
    onStepChange(activeStep - 1);
  };

  /**
   * Function to check if final step
   * @return boolean
   * @param {number} step
   */
  const finalStep = (step: number) => {
    return step >= steps.length;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {showStepByStepLegend && (
          <StepperContainer>
            {steps.map((step, index) => (
              <Stepper
                key={`stepper-${index + 1}`}
                index={index}
                activeStep={activeStep}
              />
            ))}
          </StepperContainer>
        )}
        {steps.map((step, index) => (
          <Step {...step} key={`step-${index}`} active={activeStep === index} />
        ))}

        {finalStep(activeStep) && (
          <>
            <h1>All Done!</h1>
            <p> You have successfully completed all steps.</p>
          </>
        )}
        {steps.length > activeStep && (
          <ActionContainer>
            {activeStep >= 1 && (
              <Button onClick={handleBack} data-testid="previous">
                Back
              </Button>
            )}
            <Button primary onClick={handleNext} data-testid="next">
              Next
            </Button>
          </ActionContainer>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Wizard;
