import logo from "../../images/logo.svg";
import SearchBar from "../SearchBar/SearchBar.jsx";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <SearchBar />
    </div>
  );
}

export default Header;
