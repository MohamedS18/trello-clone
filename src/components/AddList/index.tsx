import listfooterCloseIcon from "../../assets/listfooter-inputclose-icon.svg";
import listfooterAddCardIcon from "../../assets/listfooter-addcard-icon.svg";
import listfooterTemplateIcon from "../../assets/listfooter-template-icon.svg";
import { DataContext } from "../../context/dataContext";
import { useState, useContext } from "react";
import type { ListType } from "../../data";

type Props = {
  toShowAddCardInput: boolean;
  setToggledListId: React.Dispatch<React.SetStateAction<number | null>>;
};

export function AddList({ toShowAddCardInput, setToggledListId }: Props) {
  const [listName, setListName] = useState("");

  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return;
  }

  const { setBoardData } = dataContext;

  function addList() {
    const newList: ListType = {
      id: Date.now(),
      name: listName,
      tasks: [],
    };
    setBoardData((prev) => [...prev, newList]);
    setToggledListId(null);
  }

  return (
    <div className="list addList">
      {toShowAddCardInput ? (
        <div className="list__footer--inputcontainer">
          <div className="list__footer--cardinput">
            <input
              className="list__footer--input"
              placeholder="Enter the name of list"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
            />
          </div>
          <div className="list__footer--inputbuttons">
            <button className="list__footer--addcardbutton" onClick={addList}>
              Add List
            </button>
            <img
              onClick={() => setToggledListId(null)}
              src={listfooterCloseIcon}
            />
          </div>
        </div>
      ) : (
        <div className="list__footer--label">
          <div
            className="list__footer--addcard"
            onClick={() => {
              setToggledListId(-1);
            }}
          >
            <img src={listfooterAddCardIcon} />
            Add a List
          </div>
        </div>
      )}
    </div>
  );
}
