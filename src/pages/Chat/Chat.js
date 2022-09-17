import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from "../../utils/APIRoutes";
import Contacts from "../../components/Contacts/Contacts";
import Welcome from "../../components/Welcome/Welcome";
import "./Chat.scss";
import ChatContainer from "../../components/ChatContainer/ChatContainer";

function Chat() {
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
      setCurrentUser(JSON.parse(localStorage.getItem("user")));
      setIsLoaded(true);
    }
  }, [navigate]);

  //if there is current user wil check if avater is set if not will navigate to set avatar page, then will get all contacts and set them to state
  useEffect(() => {
    async function fetchData() {
      if (currentUser) {
        if (currentUser.isProfilePictureSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
        } else {
          navigate("/avatar");
        }
      }
    }
    fetchData();
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  }

  return (
    <>
      <div className="chat-container">
        <div className="chat">
          <Contacts contacts={contacts} currentUser={currentUser} changeChange={handleChatChange}/>
          {isLoaded && currentChat === undefined ? (
          <Welcome currentUser={currentUser} />
            ) : (
                <ChatContainer currentChat={currentChat} currentUser={currentUser} />
            )}
            
        </div>
      </div>
    </>
  );
}

export default Chat;
