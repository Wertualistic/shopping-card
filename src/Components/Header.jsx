import React from "react";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Shopping Card
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <a href="/#">Repo</a>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
