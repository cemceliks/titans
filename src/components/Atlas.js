import Lottie from "lottie-react";
import atlasAnimation from "../lotties/ATLAS.json";

const style = {
    height: 600,
  };
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.35],
        type: "seek",
        frames: [0, 35],
      },
      {
        visibility: [0.35, 1.0],
        type: "loop",
        frames: [35, 60],
      },
    ],
  };

const Atlas = () => {
  return (
    <Lottie
      animationData={atlasAnimation}
      style={style}
      interactivity={interactivity}
    />
  );
};
export default Atlas;