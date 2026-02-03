import { useContext, useState } from "react";
import listfooterCloseIcon from "../../assets/listfooter-inputclose-icon.svg";
import { DataContext } from "../../context/dataContext";
import type { taskType } from "../../data";
import { ADD_CARD_INPUT } from "./constants";

type Props = {
  listId: number;
  setToggledListId: React.Dispatch<React.SetStateAction<number | null>>;
};

export const AddCardInput = ({ listId, setToggledListId }: Props) => {
  const dataContext = useContext(DataContext);
  const [taskText, setTaskText] = useState("");

  if (!dataContext) {
    return;
  }

  const { setBoardData } = dataContext;

  const addCard = () => {
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
          {ADD_CARD_INPUT.addCard}
        </button>
        <img onClick={() => setToggledListId(null)} src={listfooterCloseIcon} />
      </div>
    </div>
  );
}
