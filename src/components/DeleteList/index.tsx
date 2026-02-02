import archeiveIcon from "../../assets/archeive-icon.svg";
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";

type Props = {
  listId: number
}

export function DeleteList({listId}:Props) {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return;
  }

  const { boardData, setBoardData } = dataContext;

  function deleteList() {
    setBoardData((prev) => (prev.filter((list) => list.id !== listId)))
  }

  return (
    <div className="deleteList">
      <button className="deleteListButton" onClick={deleteList}>
        <img className="deleteListIcon" src={archeiveIcon} width={20} />
        Archeive List
      </button>
    </div>
  );
}
