import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { allUsersRoute } from '../../utils/APIRoutes';
import Contacts from '../../components/Contacts/Contacts';
import "./Chat.scss";

function Chat(props) {
    const [contacts, setContacts] = useState([]);
    const[currentUser, setCurrentUser] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login");
          } else {
           setCurrentUser( JSON.parse(localStorage.getItem("user")));
          }
    }, [navigate]);

    //if there is current user wil check if avater is set if not will navigate to set avatar page, then will get all contacts and set them to state
    useEffect(() => {
        if (currentUser){
            if(currentUser.isProfilePictureSet){
                const data = axios.get(`${allUsersRoute}/${currentUser._id}`);
                setContacts(data.data);
            }else {
                navigate("/avatar");
            }
        }
    }, [currentUser]);


    return (
        <>
        <div className="chat-container">
            <div className="chat">
                <Contacts contacts={contacts} currentUser={currentUser}/>

            </div>
            
        </div>
        </>
    );
}

export default Chat;