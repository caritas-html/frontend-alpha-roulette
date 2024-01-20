import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

const disappear = keyframes`
  from {
    opacity: 1
  }

  to { 
    opacity: 0
  }
`;

export const Wrapper = styled.div<{ show: boolean }>`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  animation: ${(props) => (props.show ? appear : disappear)} 0.5s ease-in-out;
`;
