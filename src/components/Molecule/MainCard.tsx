import { useEffect, useState } from "react";
import Button from "../Atom/Button/Button";
import CardMedium from "../Atom/CardMedium/CardMedium";
import ImageMonster from "../Atom/ImageMonster/ImageMonster";
import Title from "../Atom/Title/Title";
import { CardInsideWrapper } from "./MainCardStyle";

export default function MainCard() {
  const [screenState, setScreenState] = useState(true);
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    if (!screenState) {
      setTimeout(() => {
        setShowGame(true);
      }, 500);
    }
  });

  return (
    <>
      <CardMedium>
        {!showGame ? (
          <CardInsideWrapper show={showGame}>
            <Title title="Alpha Roulette" />
            <ImageMonster />
            <Button text="Play" onClick={() => setScreenState(false)} />
          </CardInsideWrapper>
        ) : (
          <CardInsideWrapper show={showGame}>
            <Title title="Alpha Roulette" />
            <ImageMonster />
          </CardInsideWrapper>
        )}
      </CardMedium>
    </>
  );
}
