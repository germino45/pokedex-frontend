import logo from "../../images/Pikachu_logo.svg";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import { Link } from "react-router-dom";

function Header({ onChange, onClick }) {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      <SearchBar onChange={onChange} />
      <Navigation onClick={onClick} />
    </div>
  );
}

export default Header;
