import headerMoreIcon from "../../assets/header-more-icon.svg";
import headerLogoIcon from "../../assets/header-logo-icon.svg";
import headerSearchIcon from "../../assets/header-search-icon.svg";
import { HEADER_RIGHT, HEADER_RIGHT_ICONS } from "./constants";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__left--item">
          <img
            className="header-button-hover"
            src={headerMoreIcon}
            width={30}
          />
        </div>
        <div className="header__left--item">
          <img
            className="header-button-hover"
            src={headerLogoIcon}
            width={65}
          />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__middle--search">
          <img
            src={headerSearchIcon}
            className="header__middle--searchimage"
            width={15}
          />
          <input className="header__middle--input" placeholder="Search" />
        </div>
        <button className="header__middle--button">
          {HEADER_RIGHT.create}
        </button>
      </div>
      <div className="header__right">
        {HEADER_RIGHT_ICONS.map((image, index) => (
          <div className="header__right--item" key={index}>
            <img className="header-button-hover" src={image} width={25} />
          </div>
        ))}
        <div className="header__right--item">
          <span className="header__right--profile ">
            {HEADER_RIGHT.profile}
          </span>
        </div>
      </div>
    </header>
  );
}
