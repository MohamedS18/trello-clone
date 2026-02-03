import { Board } from "../Board";
import { BoardHeader } from "../BoardHeader";

export const Main = () => {
  return (
    <main className="main">
      <BoardHeader />
      <Board />
    </main>
  );
}
