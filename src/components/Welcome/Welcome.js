import React from 'react';
import "./Welcome.scss";
import Robot from "../../assets/robot.gif";

function Welcome({currentUser}) {
    return (
        <div className='welcome-container'>
            <img className="welcome-container__img" src={Robot} alt="robot" />
            <h1 className="welcome-container__title"> Welcome,<span> {currentUser.username}!</span></h1>
            <h3 className="welcome-container__subtitle">Select a contact to start chatting</h3>
        </div>
    );
}

export default Welcome;