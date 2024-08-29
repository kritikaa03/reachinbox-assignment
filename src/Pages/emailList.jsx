import { useContext, useEffect, useState } from "react";
import { themeContext } from "../context";
import { Getallmails, fetchThread } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { FaSync } from 'react-icons/fa'; // Import the refresh icon from react-icons
import "../App.css";

const EmailList = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const maildata = useSelector((store) => store.reducer.data);
  const isLoading = useSelector((store) => store.reducer.loading);
  const [threadId, setThreadId] = useState(null);

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoia3JpdGlrYWdpcmkwM0BnbWFpbC5jb20iLCJpZCI6MTI4OCwiZmlyc3ROYW1lIjoiS3JpdGlrYSIsImxhc3ROYW1lIjoiR2lyaSJ9LCJpYXQiOjE3MjQ3ODc5NTcsImV4cCI6MTc1NjMyMzk1N30.M6ZFdHbfyNpQi27PtVGggEkKQwtMedoPTVcUcmg7lMw";
  
  useEffect(() => {
    dispatch(Getallmails(token));
  }, [token]);

  useEffect(() => {
    if (!!threadId) {
      dispatch(fetchThread(threadId, token));
    }
  }, [threadId]);

  const handleClick = (el) => {
    setThreadId(el);
  };
  
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <>
      {isLoading ? (
        <span className="text-white">Loading...</span>
      ) : (
        <section className={`right-side w-[350px] border border-[#23272C] border-r-1 pr-3 pl-3 h-[657px] overflow-y-auto scrollbar-w-0 scrollbar-thumb-[black]`}>
          <div className="pl-3 pr-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[#4285F4] text-lg font-semibold text-left">
                All Inbox(s)
              </p>
              <div className="bg-light-gray p-2 rounded-full">
                <FaSync color={darkMode ? "black" : "white"} />
              </div>
            </div>
            <p
              className="text-white mt-1 text-left"
              style={{ color: darkMode ? "black" : "white" }}
            >
              2/2 <span className="text-[#7F7F7F]">Inboxes Selected</span>
            </p>
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="search"
              className="bg-[#23272C] rounded pl-4 w-full text-sm"
            />
            <div className="flex items-center justify-between text-white mt-3 mb-3 text-sm">
              <div className="flex items-center gap-2">
                <p className="rounded-full bg-[#23272C] text-[#5C7CFA] w-[30px] text-center">
                  3
                </p>
                <p
                  style={{ color: darkMode ? "black" : "white" }}
                  className="font-semibold"
                >
                  New Replies
                </p>
              </div>
              <div>
                <p
                  style={{ color: darkMode ? "black" : "white" }}
                  className="font-semibold"
                >
                  Newest
                </p>
              </div>
            </div>
          </div>

          <div className="text-white">
            {maildata.map((el, index) => (
              <div
                key={index}
                className={`border-t border-b border-[#23272C] mb-5 py-2 ${
                  selectedItem === index ? "selected" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div key={index} onClick={() => handleClick(el.threadId)}>
                  <div className="flex items-center justify-start gap-10 pl-3">
                    <div className="w-[150px] flex item-center justify-start gap-4 text-start">
                      <p style={{ color: darkMode ? "black" : "white" }}>
                        {el.fromEmail}
                      </p>
                      <p className="text-[#4f4f51]">Mar7</p>
                    </div>
                  </div>
                  <div className="text-start gap-5 pl-3">
                    <p style={{ color: darkMode ? "black" : "#B9B9B9" }}>
                      {el.fromName}
                    </p>
                  </div>
                  <div className="flex items-center justify-around gap-5 mb-3 mt-3">
                    <div>
                      <p
                        className="rounded-full bg-[#23272C] w-[100px] font-[600]"
                        style={{
                          color: el.isRead ? "green" : "inherit",
                          background: darkMode ? "#bec7d1" : "#23272C",
                        }}
                      >
                        {el.isRead ? "Interested" : "Pending"}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          color: darkMode ? "black" : "#B9B9B9",
                          background: darkMode ? "#bec7d1" : "#23272C",
                        }}
                        className="pr-2 pl-2 rounded-full"
                      >
                        Campaign Name
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default EmailList;
