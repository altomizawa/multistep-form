import { useState } from 'react'

function useMultiStepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next(){
    setCurrentStepIndex(i => {
      if(i >= steps.length - 1) return i
        return i + 1})
  }

  function back() {
    setCurrentStepIndex(i => {
      if (i === 0) return i
      return i - 1
    })
  }

  function goto(i) {
    setCurrentStepIndex(i)
  }

  return {
    steps,
    currentStepIndex,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length -1,
    setCurrentStepIndex,
    back,
    next,
    goto,
  }
}

export default useMultiStepForm
