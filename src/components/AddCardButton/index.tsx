import listfooterAddCardIcon from "../../assets/listfooter-addcard-icon.svg";
import listfooterTemplateIcon from "../../assets/listfooter-template-icon.svg";

type Props = {
  listId: number;
  setToggledListId: React.Dispatch<React.SetStateAction<number | null>>;
};

export function AddCardButton({ listId, setToggledListId }: Props) {
  return (
    <div className="list__footer--label">
      <div
        className="list__footer--addcard"
        onClick={() => {
          setToggledListId(listId);
        }}
      >
        <img src={listfooterAddCardIcon} />
        Add a Card
      </div>
      <img src={listfooterTemplateIcon} />
    </div>
  );
}
