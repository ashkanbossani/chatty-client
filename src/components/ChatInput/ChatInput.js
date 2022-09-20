import React, { useState } from "react";
import "./ChatInput.scss";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";


function ChatInput() {
    const [emojiPicker, setEmojiPicker] = useState(false);
    const [message, setMessage] = useState("");

    const handleEmojiClick = (event, emojiObject) => {
        let msg = message;
        msg += emojiObject.emoji;
        setMessage(msg);
    }

    const handleEmojiHideShow = () => {
        setEmojiPicker(!emojiPicker);
    }
  return (
    <div className="chatInput">
      <div className="chatInput__button">
        <div className="chatInput__emoji">
          <BsEmojiSmileFill onClick={handleEmojiHideShow}/>
          {emojiPicker && <Picker onEmojiClick={handleEmojiClick}/>}
        </div>
      </div>
      <form className="chatInput__form">
        <input
          type="text"
          placeholder="Type a message"
          className="chatInput__input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <button className="chatInput__submit">
            <IoMdSend />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
