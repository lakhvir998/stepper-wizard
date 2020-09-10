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
  steps: StepProps[];
  activeStep: number;
  showStepByStepLegend?: boolean;
  dark?: boolean;
  onStepChange: (step: number) => void;
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
