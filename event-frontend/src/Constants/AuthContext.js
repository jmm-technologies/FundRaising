import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import  config  from '../config.json';
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const apiKey = config.apiUrl;
    let navigate = useNavigate();

    const login = async (email, password) => {
        try {
            const response = await axios.post(apiKey+'/auth/admin/login', {
                email,
                password,
            });

            const user = response.data;
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            // check user lgoin or not
            checkUserLoggedIn();
            navigate("/eventlist");
        } catch (error) {
            return "Invalid email or password"
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    // chieck usr is logged in or not
    const checkUserLoggedIn = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUser(user);
        }
        else {
            navigate("/login");
        }
    };

    useEffect(() => {
        checkUserLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };

