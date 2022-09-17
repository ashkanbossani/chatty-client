import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BiPowerOff } from 'react-icons/bi';
import './Logout.scss';

function Logout() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        localStorage.clear();
        navigate('/login');
    };
    return (
        <button className='logout-button' onClick={handleLogout}>
            <BiPowerOff  />
        </button>
    );
}

export default Logout;