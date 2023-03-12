import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div classNameName="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {date} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            REPO
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
