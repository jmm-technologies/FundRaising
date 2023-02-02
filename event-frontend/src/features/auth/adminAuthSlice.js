import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "./authService";

const admin = localStorage.getItem("admin");
const initialState = admin 
? { 
  isLoggedIn: true, 
  admin: JSON.stringify(admin)
 } 
 :  { 
  isLoggedIn: false,
   admin: null 
  };

export const adminLogin = createAsyncThunk(
  "auth/adminLogin",
  async ({ email, password }) => {
   try {
    const response = await AuthServices.adminLogin(email, password);
    return response;
   }
    catch (error) {
      return "Invalid email or password"
    }
  }
);

export const adminLogout = createAsyncThunk(
  "auth/adminLogout",
  async () => {
    const response = await AuthServices.adminLogout();
    return response;
  }
);

// check user is logged in or not
export const checkUserLoggedIn = createAsyncThunk(
  "auth/checkUserLoggedIn",
  async () => {
    const response = await AuthServices.checkUserLoggedIn();
    return response;
  }
);


export const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {},
  extraReducers: {
    [adminLogin.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.admin = action.payload;
    },
    [adminLogout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.admin = null;
    },
    [checkUserLoggedIn.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.admin = action.payload;
    },
  },
});

const { reducer } = adminAuthSlice;
export default reducer;