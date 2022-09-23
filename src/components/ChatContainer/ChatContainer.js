import React, { useState, useEffect } from "react";
import "./ChatContainer.scss";
import Logout from "../Logout/Logout";
import ChatInput from "../ChatInput/ChatInput";
import axios from "axios";
import { messagesRoute, getAllMessagesRoute } from "../../utils/APIRoutes";

function ChatContainer({ currentChat, currentUser }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const response = await axios.post(getAllMessagesRoute, {
        from: currentUser._id,
        to: currentChat._id,
      });
      setMessages(response.data);
    };
    getMessages()
  }, []);

  const handleSendMsg = async (msg) => {
    await axios.post(`${messagesRoute}`, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
  };

  console.log(messages);

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
          <div className="chatContainer__messages">
            {messages.map((message) => {
              return (
                <div>
                  <div
                    className={`chatContainer__messages--message ${
                      message.fromSelf ? "sended" : "recieved"
                    }`}
                  >
                    <div className="chatContainer__content">
                      <p>{message.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ChatInput handleSendMsg={handleSendMsg} />
        </div>
      )}
    </>
  );
}

export default ChatContainer;
