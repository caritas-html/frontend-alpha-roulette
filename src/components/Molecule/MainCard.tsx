import { useEffect, useState } from "react";
import Button from "../Atom/Button/Button";
import CardMedium from "../Atom/CardMedium/CardMedium";
import ImageMonster from "../Atom/ImageMonster/ImageMonster";
import Title from "../Atom/Title/Title";
import { CardInsideWrapper } from "./MainCardStyle";
import HeaderCardInside from "@/components/HeaderCardInside/HeaderCardInside";
import { InputComponent } from "../Atom/Input/InputStyle";
import api from "@/utils/axios";

type MatchStatus = {
  difficult: string;
  gameConfig: {
    rounds: number;
    total: number;
    full: number;
    blank: number;
  };
  players: {
    player1: {
      name: string;
      life: number;
    };
    player2: {
      name: string;
      life: number;
    };
  };
};

export default function MainCard() {
  const [screenState, setScreenState] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [userName, setUserName] = useState("");
  const [matchStatus, setMatchStatus] = useState<MatchStatus>({
    difficult: "",
    gameConfig: {
      rounds: 0,
      total: 0,
      full: 0,
      blank: 0,
    },
    players: {
      player1: { name: "", life: 0 },
      player2: { name: "", life: 0 },
    },
  });

  const playGame = async () => {
    const data = {
      start: true,
      user: userName,
    };

    try {
      const response = await api.post("/", data);
      response.data && setScreenState(false);
    } catch (error) {
      setUserName("");
      console.error("Error fetching posts:", error);
      throw error;
    }
  };

  const getShot = async (target: string) => {
    const data = {
      currentPlayer: userName,
      playerInput: target,
    };

    try {
      const response = await api.post("/shot", data);
      response && PCShot();
    } catch (error) {
      console.error({ message: error });
    }
  };

  const PCShot = async () => {
    const data = {
      currentPlayer: "PC",
      playerInput: "",
    };

    try {
      const response = await api.post("/shot", data);
      getMatchStatus();
      return response.data;
    } catch (error) {
      console.error({ message: error });
    }
  };

  const getMatchStatus = async () => {
    try {
      const response = await api.get("/");
      setMatchStatus(response.data.matchStatus);
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
            <HeaderCardInside apiProp={matchStatus} />
            {/* // smallcard */}
            <ImageMonster />
            <Button text="Shot Enemy" onClick={() => getShot("shot")} />
            <Button text="Shot Yourself" onClick={() => getShot("selfShot")} />
          </CardInsideWrapper>
        )}
      </CardMedium>
    </>
  );
}
