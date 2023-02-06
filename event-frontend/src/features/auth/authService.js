import axios from "axios";
import config from "../../config.json";
const API_URL = config.apiUrl;
//@desc admin login service and set admin in local storage
const adminLogin = async (email, password) => {
  const res = await axios
    .post(API_URL + "/auth/admin/login", {
      email: email,
      password: password,
    });
    if (res.status === 200) {
      localStorage.setItem("admin", JSON.stringify(res.data.token));
      return res.data;
    }
    else {
      return "Invalid email or password";
    }
};

// @desc admin logout
const adminLogout = () => {
  localStorage.removeItem("admin");
};

// check user is logged in or not
const checkUserLoggedIn = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin) {
    return true;
  }
  else {
    return false;
  }
};

const AuthServices = {
  adminLogin,
  adminLogout,
  checkUserLoggedIn,
};

export default AuthServices;