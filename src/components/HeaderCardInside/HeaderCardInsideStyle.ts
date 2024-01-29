import styled from "styled-components";

export const HeaderPage = styled.header`
  background-color: var(--color-black);
  opacity: 0.8;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const Scoreboard = styled.div`
  font-family: var(--font-mono-syne);
  color: var(--color-white);
  display: flex;
  justify-content: space-evenly;

  p {
    white-space: nowrap;
  }
`;
