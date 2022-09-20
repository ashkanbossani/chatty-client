import React from "react";
import "./ChatContainer.scss";
import Logout from "../Logout/Logout";
import ChatInput from "../ChatInput/ChatInput";
import Messages from "../Messages/Messages";

function ChatContainer({ currentChat }) {
  const handleSendMsg = (msg) => {
    alert(msg)
  };
  return (
    <>
      {currentChat && (
        <div className="chatContainer">
          <div className="chatContainer__header">
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
            </div>
            <Logout />
          </div>
          <Messages />
          <ChatInput handleSendMsg={handleSendMsg} />
        </div>
      )}
    </>
  );
}

export default ChatContainer;
