import cardMarkIcon from "../../assets/card-mark-icon.svg";
import cardGreenMarkIcon from "../../assets/card-greenmark-icon.svg";
import { useContext, useState } from "react";
import { DataContext } from "../../context/dataContext";
import { DeleteCard } from "../DeleteCard";
import { boardDataLists, getData, type taskType } from "../../data";

type Props = {
  taskId: number;
  isCompleted: boolean;
  taskName: string;
  toShowDelete: boolean;
  setToggledTaskId: React.Dispatch<React.SetStateAction<number | null>>;
};

export const Card = ({
  taskId,
  isCompleted,
  taskName,
  toShowDelete,
  setToggledTaskId,
}: Props) => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return;
  }

  const { setBoardData } = dataContext;
  const [taskLabel, setTaskLabel] = useState(taskName);

  const addMark = () => {
    setBoardData((prev) =>
      prev.map((list) => ({
        ...list,
        tasks: list.tasks.map((task) =>
          task.id === taskId ? { ...task, isCompleted: true } : task,
        ),
      })),
    );
  };

  const removeMark = () => {
    setBoardData((prev) =>
      prev.map((list) => ({
        ...list,
        tasks: list.tasks.map((task) =>
          task.id === taskId ? { ...task, isCompleted: false } : task,
        ),
      })),
    );
  }

  const showDelete = (e: any) => {
    e.preventDefault();
    setToggledTaskId(taskId);
  }

  const editTaskName = (newTaskLabel: string) => {
    setTaskLabel(newTaskLabel);
    setBoardData((prev) =>
      prev.map((list) => ({
        ...list,
        tasks: list.tasks.map((task) =>
          task.id === taskId ? { ...task, description: taskLabel } : task,
        ),
      })),
    );
    console.log("task saved");
    console.log(getData());
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
        <input
          className="cardTask"
          value={taskLabel}
          onChange={(e) => {
            editTaskName(e.currentTarget.value);
          }}
        />
        {toShowDelete ?? <DeleteCard taskId={taskId} />}
      </div>
    </>
  );
};
