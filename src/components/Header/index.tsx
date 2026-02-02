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
        <img  src={headerMoreIcon} width={30} />
        <img  src={headerLogoIcon} width={65} />
      </div>
      <div className="header__middle">
        <div className="header__middle--search">
          <img src={headerSearchIcon} className="header__middle--searchimage" width={15} />
          <input className="header__middle--input" placeholder="Search" />
        </div>
        <button className="header__middle--button">Create 🎉</button>
      </div>
      <div className="header__right">
        <img className="header__right--items" src={headerNotificationIcon} width={25} />
        <img className="header__right--items" src={headerThoughtsIcon} width={20} />
        <img className="header__right--items" src={headerMoreIcon} width={30} />
        <span className="header__right--profile ">MS</span>
      </div>
    </header>
  );
}
