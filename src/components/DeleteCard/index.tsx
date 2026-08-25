import archeiveIcon from "../../assets/archeive-icon.svg";
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { DELETE_CARD } from "./constants";

type Props = {
  taskId: number;
};

export const DeleteCard = ({ taskId }: Props) => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return;
  }

  const { setBoardData } = dataContext;

  const deleteTask = () => {
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
        {DELETE_CARD.archive}
      </button>
    </div>
  );
}
