import { HeaderPage } from "./HeaderCardInsideStyle";

type Props = {
  matchmatchStatus: {
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
};

export default function HeaderCardInside({ matchStatus }: Props) {
  return (
    <>
      <HeaderPage>
        <div>
          <h4>Game matchStatus</h4>
          <p>difficult: {"" && matchStatus.difficult}</p>
          <p>rounds: {0 && matchStatus.gameConfig.rounds}</p>
          <p>total: {0 && matchStatus.gameConfig.total}</p>
          <p>full: {0 && matchStatus.gameConfig.full}</p>
          <p>blank: {0 && matchStatus.gameConfig.blank}</p>;
        </div>
        <div>
          <div>
            <h4>Player 1 matchStatus</h4>
            <div>
              <p>{"" && matchStatus.players.player1.name}</p>
              <p>{0 && matchStatus.players.player1.life}</p>
            </div>
          </div>
          <div>
            <h4>Player 2 matchStatus</h4>
            <div>
              <p>{"" && matchStatus.players.player2.name}</p>
              <p>{0 && matchStatus.players.player2.life}</p>
            </div>
          </div>
        </div>
      </HeaderPage>
    </>
  );
}
