import cardMarkIcon from "../../assets/card-mark-icon.svg";
import cardGreenMarkIcon from "../../assets/card-greenmark-icon.svg";
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { DeleteCard } from "../DeleteCard";

type Props = {
  taskId: number;
  isCompleted: boolean;
  taskName: string;
  toShowDelete: boolean;
  setToggledTaskId: React.Dispatch<React.SetStateAction<number | null>>;
};

export function Card({
  taskId,
  isCompleted,
  taskName,
  toShowDelete,
  setToggledTaskId,
}: Props) {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return;
  }

  const { setBoardData } = dataContext;

  function addMark() {
    setBoardData((prev) =>
      prev.map((list) => ({
        ...list,
        tasks: list.tasks.map((task) =>
          task.id === taskId ? { ...task, isCompleted: true } : task,
        ),
      })),
    );
  }

  function removeMark() {
    setBoardData((prev) =>
      prev.map((list) => ({
        ...list,
        tasks: list.tasks.map((task) =>
          task.id === taskId ? { ...task, isCompleted: false } : task,
        ),
      })),
    );
  }

  function showDelete(e: any) {
    e.preventDefault();
    setToggledTaskId(taskId);
  }

  return (
    <>
      <div className="card" onContextMenu={(e) => showDelete(e)}>
        {isCompleted ? (
          <div className="cardMarked" onClick={removeMark}>
            <img src={cardGreenMarkIcon} width={20} />
          </div>
        ) : (
          <div className="cardMark" onClick={addMark}>
            <img src={cardMarkIcon} width={20} />
          </div>
        )}
        <div className="cardTask">{taskName}</div>
        {toShowDelete ? <DeleteCard taskId={taskId} /> : <></>}
      </div>
    </>
  );
}
