import React from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import configDark from "../../config/particlesjs-config.json";
import configLight from "../../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

export const BgParticles = (props) => {
  return (
    <Box>
      <Particles
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? configLight : configDark}
      />
    </Box>
  );
};
