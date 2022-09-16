import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loader from "../../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { avatarRoute } from "../../utils/APIRoutes";
import "./Avatar.scss";
import { Buffer } from "buffer";

function Avatar() {
  const api = `https://api.multiavatar.com/4645646`;
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const toastOptions = {
    position: "top-center",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const setProfilePic = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
      return;
    } else {
      const user = await JSON.parse(localStorage.getItem("user"));
      const {data} = await axios.post(`${avatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });

      if(data.isSet){
        user.isAvatarImageSet = true;
        user.avatarImage=data.image;
        localStorage.setItem("user", JSON.stringify(user));
        navigate('/')
      } else {
        toast.error("Something went wrong, Please try again", toastOptions);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = [];
      // foreach doesn't work with APIs
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );
        const buffer = new Buffer(image.data);
        data.push(buffer.toString("base64"));
      }

      setAvatars(data);
      setIsLoading(false);
    };

    fetchData();
  }, [api]);

  return (
    <>
      {isLoading ? (
        <div className="avatars">
          <img src={loader} alt="loader" className="loader" />
        </div>
      ) : (
        <div className="avatars">
          <div className="avatars__title">
            <h1 className="avatars__title__title">Choose your avatar</h1>
          </div>
          <div className="avatars__container">
            {avatars.map((avatar, index) => {
              return (
                <div
                  className={`avatar ${
                    selectedAvatar === index ? "selected" : ""
                  }`}
                  key={index}
                >
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <button className="avatars__button" onClick={setProfilePic}>
            Set as Avatar
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Avatar;
