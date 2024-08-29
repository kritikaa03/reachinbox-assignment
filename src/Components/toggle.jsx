import React from "react";
import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons from react-icons
import { themeContext } from "../context";
import "../Style/toggle.css";

function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle w-[30px] h-[20px] flex items-center" onClick={handleClick}>
      <div className="toggle-icons flex items-center justify-between w-full">
        {/* Display the icons based on the theme */}
        {darkMode ? (
          <FaMoon className="text-white" /> // Dark mode icon
        ) : (
          <FaSun className="text-yellow-500" /> // Light mode icon
        )}
      </div>
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}

export default Toggle;
