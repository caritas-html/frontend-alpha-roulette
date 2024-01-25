import { useEffect, useState } from "react";
import { HeaderPage } from "./HeaderCardInsideStyle";

interface MatchStatus {
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
}

interface MyComponentProps {
  apiProp?: MatchStatus;
}

export default function HeaderCardInside({ apiProp }: MyComponentProps) {
  const [matchStatus, setMatchStatus] = useState<MatchStatus | undefined>(
    apiProp
  );

  useEffect(() => {
    if (apiProp) {
      setMatchStatus(apiProp);
    }
  }, [apiProp]);

  return (
    <>
      <HeaderPage>
        {matchStatus && (
          <>
            <div>
              <h4>Game matchStatus</h4>
              <p>difficult: {matchStatus.difficult}</p>
              <p>rounds: {matchStatus.gameConfig.rounds}</p>
              <p>total: {matchStatus.gameConfig.total}</p>
              <p>full: {matchStatus.gameConfig.full}</p>
              <p>blank: {matchStatus.gameConfig.blank}</p>;
            </div>
            <div>
              <div>
                <h4>Player 1:</h4>
                <div>
                  <p>{matchStatus.players.player1.name}</p>
                  <p>{matchStatus.players.player1.life}</p>
                </div>
              </div>
              <div>
                <h4>Player 2:</h4>
                <div>
                  <p>{matchStatus.players.player2.name}</p>
                  <p>{matchStatus.players.player2.life}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </HeaderPage>
    </>
  );
}
