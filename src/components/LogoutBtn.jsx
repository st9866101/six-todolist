import React from 'react';
import {
    useNavigate,
} from 'react-router-dom';

export default function LogoutBtn() {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/login')} >
            登出
        </button>
    )
};