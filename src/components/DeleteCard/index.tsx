import archeiveIcon from "../../assets/archeive-icon.svg";
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";

type Props = {
  taskId: number;
};

export function DeleteCard({ taskId }: Props) {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return;
  }

  const { setBoardData } = dataContext;

  function deleteTask() {
    setBoardData((prev) =>
      prev.map((list) => ({
        ...list,
        tasks: list.tasks.filter((task) => task.id !== taskId),
      })),
    );
  }

  return (
    <div className="deleteCard">
      <button className="deleteCardButton" onClick={deleteTask}>
        <img className="deleteCardIcon" src={archeiveIcon} width={20}/>
        Archeive
      </button>
    </div>
  );
}
