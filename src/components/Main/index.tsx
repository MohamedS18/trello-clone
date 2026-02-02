import { Board } from "../Board";
import { BoardHeader } from "../BoardHeader";

export function Main() {
  return (
    <main className="main">
      <BoardHeader />
      <Board />
    </main>
  );
}
