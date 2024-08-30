import React from "react";
import { Link } from "react-router-dom";
import psyduck from "../../images/psyduck.png";

function PageNotFound() {
  return (
    <div className="not__found">
      <img className="not__found-image" src={psyduck} />
      <p className="not__found-text">
        Uh-oh! Looks like you strayed away from the path!
      </p>
      <Link className="not__found-button" to="/">
        Try Main Page
      </Link>
    </div>
  );
}

export default PageNotFound;
