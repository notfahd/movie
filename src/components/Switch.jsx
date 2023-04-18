import React, { useEffect, useState } from "react";
// import "./Switch.css";
const Switch = ({ rounded = false, isToggled, onToggle }) => {
  useEffect(() => {
    const them = localStorage.getItem("Them");
    if (them === "light-mode") {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else if (them === "light-mode") {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  }, []);
  const sad = () => {
    // e.preventDefault();
    if (isToggled) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("Them", "light-mode");
    } else if (!isToggled) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("Them", "dark-mode");
    }
  };
  const them = localStorage.getItem("them");

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        value={true}
      />
      <span className="slider rounded" onClick={() => sad()}>
        {/* <img src= alt=""/> */}
        {them}
      </span>
      {them}
    </label>
  );
};

export default Switch;
