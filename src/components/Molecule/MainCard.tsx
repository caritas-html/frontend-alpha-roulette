import { useEffect, useState } from "react";
import Button from "../Atom/Button/Button";
import CardMedium from "../Atom/CardMedium/CardMedium";
import ImageMonster from "../Atom/ImageMonster/ImageMonster";
import Title from "../Atom/Title/Title";
import { CardInsideWrapper } from "./MainCardStyle";
import HeaderCardInside from "@/components/HeaderCardInside/HeaderCardInside";
import { InputComponent } from "../Atom/Input/InputStyle";
import api from "@/utils/axios";

export default function MainCard() {
  const [screenState, setScreenState] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [userName, setUserName] = useState("");
  const [matchStatus, setMatchStatus] = useState({});
  const [dataPost, setDataPost] = useState({});

  const playGame = async () => {
    const data = {
      start: true,
      user: userName,
    };

    try {
      const response = await api.post("/", data);
      response.data && setScreenState(false);
      setMatchStatus(response.data);
      return response.data;
    } catch (error) {
      setUserName("");
      console.error("Error fetching posts:", error);
      throw error;
    }
  };

  const getShot = async (target: string) => {
    setDataPost({
      currentPlayer: userName,
      playerInput: target,
    });

    try {
      const response = await api.post("/shot", dataPost);
      setMatchStatus(response.data);
      response && PCShot();
    } catch (error) {
      console.error({ message: error });
    }
  };

  const PCShot = async () => {
    setDataPost({
      currentPlayer: "PC",
      playerInput: "",
    });

    try {
      const response = await api.post("/shot", dataPost);
      setMatchStatus(response.data);
      console.log({ pcShot: matchStatus });
      return response.data;
    } catch (error) {
      console.error({ message: error });
    }
  };

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
            <InputComponent
              placeholder="Nome do usuário"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Button text="Play" onClick={playGame} />
          </CardInsideWrapper>
        ) : (
          <CardInsideWrapper show={showGame}>
            <HeaderCardInside />
            // smallcard
            <ImageMonster />
            <Button text="Shot Enemy" onClick={() => getShot("shot")} />
            <Button text="Shot Yourself" onClick={() => getShot("selfShot")} />
          </CardInsideWrapper>
        )}
      </CardMedium>
    </>
  );
}
