import headerMoreIcon from "../../assets/header-more-icon.svg";
import headerLogoIcon from "../../assets/header-logo-icon.svg";
import headerSearchIcon from "../../assets/header-search-icon.svg";
import headerNotificationIcon from "../../assets/header-notification-icon.svg";
import headerThoughtsIcon from "../../assets/header-thoughts-icon.svg";

const imageArray = [headerMoreIcon, headerLogoIcon];

export function Header() {
  return (
    <header className="header">
      <div className="header__left">
        {/* {
          imageArray.map((img) => <img src={img} width={50}></img>)
        } */}
        <div className="header__left--item">
          <img className="header-button-hover" src={headerMoreIcon} width={30} /> 
        </div>
        <div className="header__left--item">
          <img className="header-button-hover" src={headerLogoIcon} width={65} />
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
        <button className="header__middle--button">Create 🎉</button>
      </div>
      <div className="header__right">
        <div className="header__right--item">
          <img
            className="header-button-hover"
            src={headerNotificationIcon}
            width={25}
          />
        </div>
        <div className="header__right--item">
          <img
            className="header-button-hover"
            src={headerThoughtsIcon}
            width={22}
          />
        </div>
        <div className="header__right--item">
          <img
            className="header-button-hover"
            src={headerMoreIcon}
            width={25}
          />
        </div>
        <div className="header__right--item">
          <span className="header__right--profile ">MS</span>
        </div>
      </div>
    </header>
  );
}
