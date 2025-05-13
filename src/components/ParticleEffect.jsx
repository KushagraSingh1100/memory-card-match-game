import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";

const ParticleEffect = ({ id }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFirePreset(engine);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      options={{
        preset: "fire",
        fullScreen: { enable: false },
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 2,
        },
      }}
    />
  );
};

export default ParticleEffect;
