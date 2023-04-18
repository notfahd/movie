import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Switch from "./Switch";
import "./Nav.css";
import SearchBar from "./SearchBar";
const Nav = () => {
  const [isToggled, setIsToggled] = useState(true);
  useEffect(() => {
    const them = localStorage.getItem("Them");

    if (them === "light-mode") {
      setIsToggled(false);
    } else if (them === "dark-mode") {
      setIsToggled(true);
    }
  }, []);
  return (
    <div className="nav">
      <Switch
        rounded={true}
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
      <div>
        <SearchBar />
      </div>
      <div className="op">
        <span>
          <NavLink
            className="link"
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "red" : ""
              };
            }}
            to="/"
          >
            Home
          </NavLink>
        </span>
        <span>
          <NavLink
            className="link"
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "red" : ""
              };
            }}
            to="/Movie"
          >
            Movie
          </NavLink>
        </span>
        <span>
          <NavLink
            className="link"
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "red" : ""
              };
            }}
            to="/tv"
          >
            tv
          </NavLink>
        </span>
        <span>
          <NavLink
            className="link"
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "red" : ""
              };
            }}
            to="/person"
          >
            Person
          </NavLink>
        </span>
      </div>

      {/* <div className="more">
        <label className="burger" htmlFor="burger">
          <input type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div> */}
    </div>
  );
};

export default Nav;
