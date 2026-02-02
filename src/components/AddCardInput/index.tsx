import { useContext, useState } from "react";
import listfooterCloseIcon from "../../assets/listfooter-inputclose-icon.svg";
import { DataContext } from "../../context/dataContext";
import type { taskType } from "../../data";

type Props = {
  listId: number;
  setToggledListId: React.Dispatch<React.SetStateAction<number | null>>;
};

export function AddCardInput({ listId, setToggledListId }: Props) {
  const dataContext = useContext(DataContext);
  const [taskText, setTaskText] = useState("");

  if (!dataContext) {
    return;
  }

  const { setBoardData } = dataContext;

  function addCard() {
    const newTask: taskType = {
      id: Date.now(),
      description: taskText,
      isCompleted: false,
    };
    setBoardData((prev) =>
      prev.map((list) =>
        list.id === listId
          ? { ...list, tasks: [...list.tasks, newTask] }
          : list,
      ),
    );

    setTaskText("");
    setToggledListId(null);
  }

  return (
    <div className="list__footer--inputcontainer">
      <div className="list__footer--cardinput">
        <textarea
          className="list__footer--input"
          placeholder="Enter a title or paste a link"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </div>
      <div className="list__footer--inputbuttons">
        <button className="list__footer--addcardbutton" onClick={addCard}>
          Add Card
        </button>
        <img onClick={() => setToggledListId(null)} src={listfooterCloseIcon} />
      </div>
    </div>
  );
}
