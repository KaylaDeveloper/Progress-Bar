/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "4px",
  },
  large: {
    "--height": "16px",
    "--border-radius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZE[size];
  return (
    <Wrapper style={styles}>
      <Progress value={value}></Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.value}%;
  background: #4747eb;
  border-radius: 4px 0px 0px 4px;
`;
export default ProgressBar;
