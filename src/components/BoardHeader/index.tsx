import boardheaderDropdownIcon from "../../assets/boardheader-dropdown-icon.svg";
import boardheaderViewsIcon from "../../assets/boardheader-views-icon.svg";
import boardheaderVisibilityIcon from "../../assets/boardheader-visibility-icon.svg";
import boardheaderShareIcon from "../../assets/boardheader-share-icon.svg";
import boardheaderAutomationIcon from "../../assets/boardheader-automation-icon.svg";
import boardheaderFilterIcon from "../../assets/boardheader-filter-icon.svg";
import boardheaderPowerUpsIcon from "../../assets/boardheader-powerups-icon.svg";
import boardheaderStarIcon from "../../assets/boardheader-star-icon.svg";
import boardheaderMoreIcon from "../../assets/boardheader-more-icon.svg";

export function BoardHeader() {
  return (
    <header className="boardheader">
      <div className="boardheader__left">
        <h1 className="boardheader--title">My Trello Board</h1>
        <div className="boardheader__left--views">
          <img src={boardheaderViewsIcon} />
          <img src={boardheaderDropdownIcon} width={15} />
        </div>
      </div>
      <div className="boardheader__right">
        <span className="header__right--profile ">MS</span>
        <div className="header__right--items">
          <img
            className="header-button-hover"
            src={boardheaderPowerUpsIcon}
            width={20}
          />
        </div>
        <div className="header__right--items">
          <img
            className="header-button-hover"
            src={boardheaderAutomationIcon}
            width={20}
          />
        </div>
        <div className="header__right--items">
          <img
            className="header-button-hover"
            src={boardheaderFilterIcon}
            width={20}
          />
        </div>
        <div className="header__right--items">
          <img
            className="header-button-hover"
            src={boardheaderStarIcon}
            width={20}
          />
        </div>
        <div className="header__right--items">
          <img
            className="header-button-hover"
            src={boardheaderVisibilityIcon}
            width={20}
          />
        </div>

        <button className="boardheader__right--share">
          <img
            className="boardheader__right--shareimage"
            src={boardheaderShareIcon}
            width={20}
          />
          Share
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
