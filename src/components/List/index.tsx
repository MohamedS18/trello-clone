import listActionsIcon from "../../assets/list-actions-icon.svg";
import listCollapseIcon from "../../assets/list-collapse-icon.svg";
import { Card } from "../Card";
import { AddCardButton } from "../AddCardButton";
import { AddCardInput } from "../AddCardInput";
import type { taskType } from "../../data";
import { DeleteList } from "../DeleteList";

type Props = {
  listName: string;
  listId: number;
  toShowAddCardInput: boolean;
  taskItems: taskType[];
  setToggledListId: React.Dispatch<React.SetStateAction<number | null>>;
  toggledTaskId: number | null;
  setToggledTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  toToggleActionListId: boolean;
  setToggleActionListId: React.Dispatch<React.SetStateAction<number | null>>;
};

export function List({
  listName,
  listId,
  toShowAddCardInput,
  taskItems,
  setToggledListId,
  toggledTaskId,
  setToggledTaskId,
  toToggleActionListId,
  setToggleActionListId,
}: Props) {
  function showActions(e: any) {
    e.stopPropagation();
    setToggleActionListId(listId);
  }

  return (
    <>
      <div className="list">
        <div className="list__header">
          <div className="list__header--title">{listName}</div>
          <div className="list__header--buttons">
            <img src={listCollapseIcon} width={20} />
            <img
              onClick={(e) => showActions(e)}
              src={listActionsIcon}
              width={20}
            />
            {toToggleActionListId ? <DeleteList listId={listId}/> : <></>}
          </div>
        </div>
        <div className="list__cards">
          {taskItems.map((task) => {
            return (
              <Card
                key={task.id}
                taskId={task.id}
                isCompleted={task.isCompleted}
                taskName={task.description}
                toShowDelete={toggledTaskId === task.id}
                setToggledTaskId={setToggledTaskId}
              />
            );
          })}
        </div>
        <div className="list__footer">
          {toShowAddCardInput ? (
            <AddCardInput listId={listId} setToggledListId={setToggledListId} />
          ) : (
            <AddCardButton
              listId={listId}
              setToggledListId={setToggledListId}
            />
          )}
        </div>
      </div>
    </>
  );
}
