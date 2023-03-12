import React from 'react'

function Header() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Shopping Card</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header