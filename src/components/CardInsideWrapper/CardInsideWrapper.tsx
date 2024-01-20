import React from "react";
import { Wrapper } from "./CardInsideWrapper";

type Props = {
  children: JSX.Element;
  showGame: boolean;
};

export default function CardInsideWrapper({ children, showGame }: Props) {
  return (
    <>
      <Wrapper  show={showGame}>{children}</Wrapper>
    </>
  );
}
