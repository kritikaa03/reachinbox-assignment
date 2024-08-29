import Home from "../Components/navBar";
import "../App.css";
import logo from "../assests/No Message illustration.svg";
import { themeContext } from "../context";
import { useContext } from "react";

const Index = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <Home />
        <div
          className="flex items-center justify-center flex-grow"
          style={{ background: darkMode ? "white" : "#101113" }}
        >
          <div className="flex flex-col items-center w-full max-w-[600px] p-4">
            <img src={logo} className="w-[200px] object-cover" alt="logo" />
            <div className="text-white w-full flex flex-col items-center mt-[40px]">
              <p className="font-[600]" style={{ color: darkMode ? "#101113" : "white" }}>
                It’s the beginning of a legendary sales pipeline
              </p>
              <p className="w-[250px] mt-[10px] text-[#888a8e] text-center">
                When you have inbound E-mails you’ll see them here
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
