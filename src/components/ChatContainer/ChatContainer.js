import React, { useState, useEffect, useRef } from "react";
import "./ChatContainer.scss";
import Logout from "../Logout/Logout";
import ChatInput from "../ChatInput/ChatInput";
import axios from "axios";
import { messagesRoute, getAllMessagesRoute } from "../../utils/APIRoutes";

function ChatContainer({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    if(currentChat){
    const getMessages = async () => {
      const response = await axios.post(getAllMessagesRoute, {
        from: currentUser._id,
        to: currentChat._id,
      });
      setMessages(response.data);
    };
    getMessages()
  }
  }, []);

  const handleSendMsg = async (msg) => {
    await axios.post(`${messagesRoute}`, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      to:currentChat._id,
      from:currentUser._id,
      message:msg,
    });

    const msgs = [...messages];
    msgs.push({
      fromSelf:true, message: msg });
      setMessages(msgs);
  };

  useEffect(() => {
    if(socket.current){
      socket.current.on("msg-recieve", (msg) => {
       setArrivalMessage({fromSelf: false, message:msg})
      });
    }
  }, [messages]);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
