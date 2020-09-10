import React, { useState } from "react";
import Wizard from "./Wizard";
import DemoStep from "./DemoStep";

function App() {
  const [activeStep, setStep] = useState(0);
  const steps = [
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
      component: <DemoStep title="step 2" />,
      label: "Step 3",
      index: 3,
    },
  ];

  return (
    <div className="App">
      <Wizard
        steps={steps}
        activeStep={activeStep}
        onStepChange={(step) => setStep(step)}
        onSuccess={() => console.log("success")}
      />
    </div>
  );
}

export default App;
