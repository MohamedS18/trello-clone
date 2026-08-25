import boardheaderShareIcon from "../../assets/boardheader-share-icon.svg";
import boardheaderMoreIcon from "../../assets/boardheader-more-icon.svg";
import { BOARD_HEADER, BOARD_HEADER_LEFT_ICONS, BOARD_HEADER_RIGHT_ICONS } from "./constants";

export const BoardHeader = () => {
  return (
    <header className="boardheader">
      <div className="boardheader__left">
        <h1 className="boardheader--title">{BOARD_HEADER.boardName}</h1>
        <div className="boardheader__left--views">
          {BOARD_HEADER_LEFT_ICONS.map((image, index) => (
            <img src={image} width={20} key={index}/>
          ))}
        </div>
      </div>
      <div className="boardheader__right">
        <span className="header__right--profile ">{BOARD_HEADER.profile}</span>
        {BOARD_HEADER_RIGHT_ICONS.map((image, index) => (
          <div className="header__right--items" key={index}>
            <img className="header-button-hover" src={image} width={20} />
          </div>
        ))}
        <button className="boardheader__right--share">
          <img
            className="boardheader__right--shareimage"
            src={boardheaderShareIcon}
            width={20}
          />
          {BOARD_HEADER.share}
        </button>
        <div className="header__right--items">
          <img
            className="header-button-hover"
            src={boardheaderMoreIcon}
            width={20}
          />
        </div>
      </div>
    </header>
  );
}
