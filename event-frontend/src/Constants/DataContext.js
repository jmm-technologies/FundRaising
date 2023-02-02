// import React, { useState, useContext, createContext, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext({});

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     let navigate = useNavigate();

//     const login = async (email, password) => {
//         try {
//             // sending token in heade
//             let authTokens = localStorage.getItem("user")
//                 ? JSON.parse(localStorage.getItem("token"))
//                 : null;
//                 headers = {

//                 }
//             const response = await axios.post("http://localhost:4000/api/event", {
//                 email,
//                 password,
//             });

//             const user = response.data;
//             setUser(user);
//             localStorage.setItem("user", JSON.stringify(user));
//             navigate("/eventlist");
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem("user");
//         navigate("/login");
//     };

//     // chieck usr is logged in or not
//     const checkUserLoggedIn = () => {
//         const user = JSON.parse(localStorage.getItem("user"));
//         if (user) {
//             setUser(user);
//         }
//         else {
//             navigate("/login");
//         }
//     };

//     useEffect(() => {
//         checkUserLoggedIn();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// const useAuth = () => useContext(AuthContext);
// export { AuthProvider, useAuth };

