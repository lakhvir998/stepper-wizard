import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import Wizard from "./Wizard";
import { WizardProps } from "./types";
import DemoStep from "../DemoStep";

const steps = [
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
];

const renderWizard = (props: Partial<WizardProps> = {}) => {
  const defaultProps: WizardProps = {
    steps,
    activeStep: 0,
    onStepChange() {
      return;
    },
  };
  return render(<Wizard {...defaultProps} {...props} />);
};

describe("<Wizard />", () => {
  test("renders the component", () => {
    const component = shallow(
      <Wizard
        steps={steps}
        activeStep={0}
        showStepByStepLegend
        onStepChange={(step) => console.log(step)}
        onSuccess={() => console.log("success")}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test("should change next step", async () => {
    const onStepChange = jest.fn();
    const { findByTestId } = renderWizard({
      onStepChange,
    });
    const next = await findByTestId("next");

    fireEvent.click(next);

    expect(onStepChange).toHaveBeenCalledWith(1);
  });

  test("should change previous step", async () => {
    const onStepChange = jest.fn();
    const { findByTestId } = renderWizard({
      onStepChange,
      activeStep: 1,
    });
    const next = await findByTestId("previous");

    fireEvent.click(next);

    expect(onStepChange).toHaveBeenCalledWith(0);
  });
});
