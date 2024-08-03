import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserInfo.css'

const LoginInfo = () => {
    const [loginInfo, setLoginInfo] = useState(null);

    useEffect(() => {
        const fetchLoginInfo = async () => {
            try {
                const response = await axios.post('https://twitterapp-backend-n4d9.onrender.com/log-login');
                setLoginInfo(response.data);
            } catch (error) {
                console.error('Error fetching login information:', error);
            }
        };

        fetchLoginInfo();
    }, []);

    return (
        <div className="login-info page">
            <h3>Login Information:</h3>
            {loginInfo ? (
                <div>
                    <p><strong>Browser:</strong> {loginInfo.browser}</p>
                    <p><strong>Version:</strong> {loginInfo.version}</p>
                    <p><strong>OS:</strong> {loginInfo.os}</p>
                    <p><strong>Device:</strong> {loginInfo.device}</p>
                    <p><strong>IP Address:</strong> {loginInfo.ip}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default LoginInfo;
