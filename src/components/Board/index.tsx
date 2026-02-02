import { useContext, useEffect, useState } from "react";
import { List } from "../List";
import { DataContext } from "../../context/dataContext";
import { AddList } from "../AddList";

export function Board() {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return;
  }

  const { boardData, setBoardData } = dataContext;

  const [toggledListId, setToggledListId] = useState<number | null>(null);
  const [toggledTaskId, setToggledTaskId] = useState<number | null>(null);
  const [toggleActionListId, setToggleActionListId] = useState<number | null>(null);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setToggledTaskId(null);
      setToggleActionListId(null);
    });
  }, []);

  return (
    <div className="board">
      {boardData.map((list) => {
        return (
          <List
            key={list.id}
            listId={list.id}
            listName={list.name}
            taskItems={list.tasks}
            toShowAddCardInput={toggledListId === list.id}
            setToggledListId={setToggledListId}
            toggledTaskId={toggledTaskId}
            setToggledTaskId={setToggledTaskId}
            toToggleActionListId={toggleActionListId === list.id}
            setToggleActionListId={setToggleActionListId}
          />
        );
      })}
      <AddList
        toShowAddCardInput={toggledListId === -1}
        setToggledListId={setToggledListId}
      />
    </div>
  );
}
