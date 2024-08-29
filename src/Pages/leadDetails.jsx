import { useContext } from "react";
import { themeContext } from "../context";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
import "../App.css";

const LeadDetails = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <section className="right-side left w-[317px] mt-10 pl-3 overflow-x-hidden overflow-y-auto scrollbar-w-0 scrollbar-thumb-[black]">
        <div
          className="pt-2 pb-2 w-[310px] text-white text-start rounded-md font-semibold"
          style={{ background: darkMode ? "#ECEFF3" : "#23272C" }}
        >
          <p
            className="pl-3 text-sm"
            style={{ color: darkMode ? "#0a0a18" : "white" }}
          >
            Lead Details
          </p>
        </div>
        <div className="text-white pr-3 mt-3">
          {[
            { label: "Name", value: "Orlando" },
            { label: "Contact No", value: "+54-9062827869" },
            { label: "Email ID", value: "orlando@gmail.com" },
            { label: "Linkedin", value: "linkedin.com/in/timvadde" },
            { label: "Company Name", value: "Reachinbox" }
          ].map(({ label, value }, index) => (
            <div className="flex items-start justify-between mt-5 text-sm" key={index}>
              <p style={{ color: darkMode ? "#4f4f51" : "white" }}>{label}</p>
              <p className="text-[#B9B9B9]" style={{ color: darkMode ? "black" : "#B9B9B9" }}>
                {label === "Linkedin" ? (
                  <span className="text-right text-xs">{value}</span>
                ) : (
                  value
                )}
              </p>
            </div>
          ))}
        </div>

        <div
          className="pt-2 pb-2 pl-3 w-[310px] text-white text-start rounded-md mt-10 font-semibold"
          style={{ background: darkMode ? "#ECEFF3" : "#23272C" }}
        >
          <p className="text-sm" style={{ color: darkMode ? "#454F5B" : "white" }}>
            Activities
          </p>
        </div>
        <div className="text-left pl-3 mt-5">
          <p
            className="text-white text-xs font-semibold"
            style={{ color: darkMode ? "#172B4D" : "white" }}
          >
            Campaign Name
          </p>
          <div className="flex items-start justify-start gap-2 text-xs text-white mt-2 mb-5">
            <p style={{ color: darkMode ? "#172B4D" : "white" }}>
              <span className="font-semibold">3</span> Steps
            </p>
            <hr className="vertical-line" />
            <p style={{ color: darkMode ? "#172B4D" : "white" }}>
              <span className="font-semibold">5</span> Days in Sequence
            </p>
          </div>

          <div className="flex flex-col text-xs" style={{ color: darkMode ? "#4f4f51" : "white" }}>
            {[1, 2, 3].map(step => (
              <div className="flex items-start mt-4" key={step}>
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border"
                    style={{
                      borderColor: darkMode ? "#4f4f51" : "white",
                    }}
                  >
                    <MdOutlineEmail size={16} />
                  </div>
                  <div className="h-10 w-1 flex" />
                </div>
                <p className="ml-2 text-xs">
                  Step {step}: Email <br />
                  <span className="flex items-center">
                    <IoIosSend className="m-1 text-sm" /> Send 3rd, Feb
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadDetails;
