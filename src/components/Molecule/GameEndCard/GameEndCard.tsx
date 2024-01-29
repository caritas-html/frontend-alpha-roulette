import Button from "@/components/Atom/Button/Button";
import { EndCard } from "./GameEndCardStyle";

export default function GameEndCard() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <EndCard>
        <p>game over</p>
        <Button text="retry" onClick={handleReload} />
      </EndCard>
    </>
  );
}
