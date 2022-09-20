import React, { useState } from "react";
import "./ChatInput.scss";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

function ChatInput() {
  return (
    <div className="chatInput">
      <div className="chatInput__button">
        <div className="chatInput__emoji">
          <BsEmojiSmileFill />
        </div>
      </div>
      <form className="chatInput__form">
        <input
          type="text"
          placeholder="Type a message"
          className="chatInput__input"
        />
        <button className="chatInput__submit">
            <IoMdSend />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
