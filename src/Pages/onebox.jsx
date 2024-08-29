import "../App.css";
import { useContext } from "react";
import { themeContext } from "../context";
import EmailList from "./emailList";
import ThreadEmail from "./thread";
import LeadDetails from "./leadDetails";
import Navbar from "../Components/navBar";

const Onebox = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <div>
          <Navbar />
        </div>
        <div
          style={{ background: darkMode ? "white" : "black" }}
          className="bg-black flex flex-1 overflow-hidden"
        >
          <div className="flex flex-1 overflow-hidden">
            <EmailList />
            <ThreadEmail />
            <LeadDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Onebox;
