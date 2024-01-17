import React from "react";
import { ButtonComponent } from "./ButtonStyle";

type Props = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ text, onClick = () => {} }: Props) {
  return (
    <>
      <ButtonComponent onClick={onClick}>{text}</ButtonComponent>
    </>
  );
}
