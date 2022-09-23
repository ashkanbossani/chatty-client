import React, { useState, useEffect } from "react";
import "./ChatContainer.scss";
import Logout from "../Logout/Logout";
import ChatInput from "../ChatInput/ChatInput";
import Messages from "../Messages/Messages";
import axios from "axios";
import { messagesRoute, getAllMessagesRoute } from "../../utils/APIRoutes";

function ChatContainer({ currentChat, currentUser }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const response = axios.post(getAllMessagesRoute, {
      from: currentUser._id,
      to: currentChat._id,
    });
    setMessages(response.data);
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    await axios.post(`${messagesRoute}`, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
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
          <div className="chatContainer__messages"></div>
          <ChatInput handleSendMsg={handleSendMsg} />
        </div>
      )}
    </>
  );
}

export default ChatContainer;
