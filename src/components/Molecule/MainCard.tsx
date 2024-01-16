import Button from "../Atom/Button/Button";
import CardMedium from "../Atom/CardMedium/CardMedium";
import ImageMonster from "../Atom/ImageMonster/ImageMonster";
import Title from "../Atom/Title/Title";
import { CardInsideWrapper } from "./MainCardStyle";

export default function MainCard() {
  return (
    <>
      <CardMedium>
        <CardInsideWrapper>
          <Title title="Alpha Roulette" />
          <ImageMonster />
          <Button text="Play" />
        </CardInsideWrapper>
      </CardMedium>
    </>
  );
}
