## Description

A simple way to build a step-by-step wizard

## User Stories

### Schema

- As a user I want a wizard that can dynamically take me through a series of steps
- As a developer, I want the ability to dynamically change the sequence of steps based on things that the user does during the wizard walkthrough

### Props

- showStepByStepLegend:bool
  Whether or not a step by step legend should show
- steps:array
  The data for each of the step to walk through
  { id, component, label, index, nextHref, prevHref, isActive }

### Events

- onStepChange()
  Triggers when a different step is to be activated
- onSuccess()
  Triggers when the final page of the sequence is reached

### Methods

- switchSteps()
  Switches the step from one to another
- updateStepData()
  Updates the data used to know what steps to take and when

### Hooks

- onComponentRender()
  - Wizard
    Triggers the plugin hook when the component renders in the dom
- onListItems()
  - WizardSteps
    Triggers when the wizard steps are being generated
    (use this to change the step sequence for your particular integration)

### Tests

- onEventTrigger()
  - WizardStepChange
    Triggers when a different step is to be activated
  - WizardSuccess
    Triggers when the final page of the sequence is reached

## Usage

​
Add it to your project...
​

```
import * as React from 'react'
import Wizardfrom './Wizard`
​
export default () => (
  <Wizard
    steps={steps}
    activeStep={activeStep}
    onStepChange={(step) => setStep(step)}
    onSuccess={() => console.log("success")}
  />
)
```
