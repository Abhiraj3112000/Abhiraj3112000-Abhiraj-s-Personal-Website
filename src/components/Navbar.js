import React, { useState } from "react";
// import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav 
    className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-container"
      
      >
        <NavLink
          to="/"
          className="navbar-logo active"
          title="home"
          style={{ paddingRight: "100px" }}
          onClick={closeMobileMenu}
        >
          &nbsp;
          <img src = "/images/logo_trans.png" style={{height:"75px",borderRadius:"50%", width:"80px"}} alt="profile logo"/>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item ">
            <NavLink
              exact
              to="/"
              className="nav-links"
              activeClassName="nav-links-active"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              className="nav-links"
              activeClassName="nav-links-active"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink
              exact
              to="/experience"
              className="nav-links"
              activeClassName="nav-links-active"
              onClick={closeMobileMenu}
            >
              Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/tools"
              className="nav-links"
              activeClassName="nav-links-active"
              onClick={closeMobileMenu}
            >
              MyTools
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/academics"
              className="nav-links"
              activeClassName="nav-links-active"
              onClick={closeMobileMenu}
            >
              Academics
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              className="nav-links"
              activeClassName="nav-links-active"
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/hireme"
              className="nav-links"
              activeClassName="nav-links-active"
              onClick={closeMobileMenu}
            >
              HireMe
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/achievements"
              className="nav-links"
              activeClassName="nav-links-active"
              onClick={closeMobileMenu}
            >
              Achievements
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/hobbies"
              className="nav-links"
              activeClassName="nav-links-active"
              onClick={closeMobileMenu}
            >
              Hobbies
            </NavLink>
          </li>
        </ul>
        {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
      </div>
    </nav>
  );
}

export default Navbar;
