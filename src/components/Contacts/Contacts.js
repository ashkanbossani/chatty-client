import React, { useState, useEffect } from "react";
import "./Contacts.scss";
import Logo from "../../assets/logo.svg";

function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserAvatar, setCurrentUserAvatar] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserName(currentUser.username);
      setCurrentUserAvatar(currentUser.avatarPicture);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserAvatar && currentUserName && (
        <div className="contacts-container">
          <div className="contacts">
            <img className="contacts__img" src={Logo} alt="logo" />
            <h3 className="contacts__title">Chatty</h3>
          </div>
          <div className="contacts__contact">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={contact._id}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="contact__avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarPicture}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="contact__name">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="contacts__current-user">
            <div className="contacts__current-user__avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserAvatar}`}
                alt="avatar"
              />
            </div>
            <div className="contacts__current-user__name">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contacts;
