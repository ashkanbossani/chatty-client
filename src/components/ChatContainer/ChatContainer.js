import React from "react";
import "./ChatContainer.scss";
import Logout from "../Logout/Logout";
import ChatInput from "../ChatInput/ChatInput";

function ChatContainer({ currentChat }) {
  const handleSendMsg = (msg) => {
    
  }
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
        <ChatInput handleSendMsg={handleSendMsg}/>
    </div>
  )  }
    </>
  );
}

export default ChatContainer;
