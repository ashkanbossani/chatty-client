import React from "react";
import "./ChatContainer.scss";
import Logout from "../Logout/Logout";

function ChatContainer({ currentChat }) {
  return (
    <>
    { currentChat && (
    
    <div className="chatContainer">
      <div classname="chatContainer__header">
        <div className="chatContainer__user">
          <div className="chatContainer__avatar">
            <img
              src={`data:image/svg+xml;base64,${currentChat.avatarPicture}`}
              alt="avatar"
            />
          </div>
          <div className="chatContainer__name">
            <h3>{currentChat.username}</h3>
          </div>
          <Logout/>
        </div>
      </div>
      <div className="chatContainer__messages">
        </div>
        <div className="chatContainer__input">
        </div>
    </div>
  )  }
    </>
  );
}

export default ChatContainer;
