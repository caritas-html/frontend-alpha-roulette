import { HeadingTitle } from "./TitleStyle";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <>
      <HeadingTitle>{title}</HeadingTitle>
    </>
  );
}
