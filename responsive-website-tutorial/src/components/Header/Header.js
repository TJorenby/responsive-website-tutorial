import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">Loruki.</h1>
          <nav>
            <ul>
              <li className="link-list">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/features">
                  Features
                </Link>
              </li>
              <li>
                <Link className="link" to="/docs">
                  Docs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
