import archeiveIcon from "../../assets/archeive-icon.svg";
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { DELETE_LIST } from "./constants";

type Props = {
  listId: number
}

export const DeleteList = ({listId}:Props) => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return;
  }

  const { setBoardData } = dataContext;

  const deleteList = () => {
    setBoardData((prev) => (prev.filter((list) => list.id !== listId)))
  }

  return (
    <div className="deleteList">
      <button className="deleteListButton" onClick={deleteList}>
        <img className="deleteListIcon" src={archeiveIcon} width={20} />
        {DELETE_LIST.archiveList}
      </button>
    </div>
  );
}
