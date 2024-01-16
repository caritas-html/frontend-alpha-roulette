import { CardBigSize } from "./CardMediumStyle";

type Props = {
  children: JSX.Element;
};

export default function CardMedium({ children }: Props) {
  return (
    <>
      <CardBigSize>{children}</CardBigSize>
    </>
  );
}
