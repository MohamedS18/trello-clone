import listfooterAddCardIcon from "../../assets/listfooter-addcard-icon.svg";
import listfooterTemplateIcon from "../../assets/listfooter-template-icon.svg";
import { ADD_CARD_BUTTON } from "./constants";

type Props = {
  listId: number;
  setToggledListId: React.Dispatch<React.SetStateAction<number | null>>;
};

export const AddCardButton = ({ listId, setToggledListId }: Props) => {
  const showAddCard = () => {
    setToggledListId(listId);
  }
  return (
    <div className="list__footer--label">
      <div
        className="list__footer--addcard"
        onClick={showAddCard}
      >
        <img src={listfooterAddCardIcon} />
        {ADD_CARD_BUTTON.addACard}
      </div>
      <img src={listfooterTemplateIcon} />
    </div>
  );
}
