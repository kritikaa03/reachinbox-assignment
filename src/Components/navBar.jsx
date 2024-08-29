import { useContext } from "react";
import Toggle from "./toggle";
import { themeContext } from "../context";
import { SlArrowDown } from "react-icons/sl";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <header>
      <nav
        className="navbar-container flex items-center justify-between px-5 h-[70px] text-white font-[600]"
        style={{
          background: darkMode ? "white" : "#202022",
          border: darkMode ? "1px solid white" : "1px solid #202022",
        }}
      >
        <div className="navbar-title">
          <p style={{ color: darkMode ? "#0a0a18" : "white" }}>Onebox</p>
        </div>
        <div className="navbar-right flex items-center gap-4">
          <Toggle />
          <p
            style={{ color: darkMode ? "#0a0a18" : "white" }}
            className="flex items-center gap-1"
          >
            Tim's workSpace{" "}
            <span>
              <SlArrowDown className="font-[700]" />
            </span>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

