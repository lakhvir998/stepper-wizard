import React from "react";

export interface StepProps {
  id: string | number;
  component: React.ReactNode | Function;
  label: string;
  index?: number;
  active?: boolean;
  nextHref?: string;
  prevHref?: string;
}

export interface WizardProps {
  /**
   * The data for each of the step to walk through
   */
  steps: StepProps[];
  /**
   * active step
   */
  activeStep: number;
  /**
   * Whether or not a step by step legend should show
   */
  showStepByStepLegend?: boolean;
  /**
   * enable dark mode
   */
  dark?: boolean;
  /**
   * Triggers when a different step is to be activated
   * @param {number} step
   */
  onStepChange: (step: number) => void;
  /**
   * Triggers when the final page of the sequence is reached
   */
  onSuccess?: () => void;
}

export interface StepperProps {
  index: number;
  activeStep: number;
}

export interface StyledStepProps {
  readonly isActive?: boolean;
  readonly isCompleted?: boolean;
}

export interface StyledButtonProps {
  readonly primary?: boolean;
}
