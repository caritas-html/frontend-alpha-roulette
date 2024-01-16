import { ButtonComponent } from "./ButtonStyle";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <>
      <ButtonComponent>{text}</ButtonComponent>
    </>
  );
}
