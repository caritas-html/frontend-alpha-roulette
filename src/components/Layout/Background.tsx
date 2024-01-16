import { BackgroundImage } from "./BackgroundStyle";

type Props = {
  children: JSX.Element;
};

export default function Background({ children }: Props) {
  return <BackgroundImage>{children}</BackgroundImage>;
}
