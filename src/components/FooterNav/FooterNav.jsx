import React from "react";
import "./style.css";
const FooterNav = () => {
  return (
    <nav>
      <div className="footer-menue">
        <ul>
          <li>
            <a
              href="https://abhirajmaid.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              v1
            </a>
          </li>
          <li>
            <a href="https://eternalmac.com" target="_blank" rel="noreferrer">
              Eternalmac
            </a>
          </li>
          <li>
            <a href="#home">Back to Top</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FooterNav;
