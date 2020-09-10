import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";

import Wizard from "./Wizard";
import { WizardProps } from "./types";
import DemoStep from "../DemoStep";

export default {
  title: "Example/Wizard",
  component: Wizard,
} as Meta;

const Template: Story<WizardProps> = (args) => <Wizard {...args} />;

export const Light = Template.bind({});

Light.args = {
  steps: [
    {
      id: 1,
      component: <DemoStep title="step 1" />,
      label: "Step 1",
      index: 1,
    },
    {
      id: 2,
      component: <DemoStep title="step 2" />,
      label: "Step 2",
      index: 2,
    },
    {
      id: 3,
      component: <DemoStep title="step 3" />,
      label: "Step 3",
      index: 3,
    },
  ],
  activeStep: 0,
};

export const Dark = Template.bind({});

Dark.args = {
  steps: [
    {
      id: 1,
      component: () => <DemoStep title="step 1" />,
      label: "Step 1",
      index: 1,
    },
    {
      id: 2,
      component: () => <DemoStep title="step 2" />,
      label: "Step 2",
      index: 2,
    },
    {
      id: 3,
      component: () => <DemoStep title="step 3" />,
      label: "Step 3",
      index: 3,
    },
  ],
  activeStep: 0,
  dark: true,
};

export const WithLegend = Template.bind({});

WithLegend.args = {
  steps: [
    {
      id: 1,
      component: () => <DemoStep title="step 1" />,
      label: "Step 1",
      index: 1,
    },
    {
      id: 2,
      component: () => <DemoStep title="step 2" />,
      label: "Step 2",
      index: 2,
    },
    {
      id: 3,
      component: () => <DemoStep title="step 3" />,
      label: "Step 3",
      index: 3,
    },
  ],
  activeStep: 0,
  showStepByStepLegend: true,
};

export const CompleteStep = Template.bind({});

CompleteStep.args = {
  steps: [
    {
      id: 1,
      component: () => <DemoStep title="step 1" />,
      label: "Step 1",
      index: 1,
    },
    {
      id: 2,
      component: () => <DemoStep title="step 2" />,
      label: "Step 2",
      index: 2,
    },
    {
      id: 3,
      component: () => <DemoStep title="step 3" />,
      label: "Step 3",
      index: 3,
    },
  ],
  activeStep: 3,
  showStepByStepLegend: true,
};
