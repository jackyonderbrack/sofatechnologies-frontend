import { useState } from "react";

const useAnimateTransition = (duration = 300) => {
  const [transitionStage, setTransitionStage] = useState("enter");

  const triggerAnimation = () => {
    setTransitionStage("exit");
    setTimeout(() => {
      setTransitionStage("enter");
    }, duration);
  };

  return { transitionStage, triggerAnimation };
};

export default useAnimateTransition;
