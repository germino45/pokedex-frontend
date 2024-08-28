import { Link } from "react-router-dom";
import pokeball from "../../images/pokeball.svg";

function Navigation() {
  return (
    <div className="navigation">
      <Link className="navigation__link">Profile(Coming Soon!)</Link>
      <Link to="/about" className="navigation__link">
        About
      </Link>
    </div>
  );
}

export default Navigation;
