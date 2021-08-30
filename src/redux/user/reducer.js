import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { doForgotPassword, doLogin, doRegiter } from "../user/action";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    login: {
      loading: false,
      result: {},
      error: {},
    },
    register: {
      loading: false,
      result: {},
      error: {},
    },
    forgotpassword: {
      loading: false,
      result: {},
      error: {},
    },
  },
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");
      state.login.result = {};
    },
  },

  extraReducers: {
    [doLogin.pending]: (state, action) => {
      state.login.loading = true;
    },
    [doLogin.fulfilled]: (state, action) => {
      state.login.loading = false;
      state.login.result = action.payload;
    },
    [doLogin.rejected]: (state, action) => {
      console.error("========> Error: ", action.error.message);
      message.error({
        content: "Đăng nhập không thành công",
        className: "app-message",
      });
      state.item.loading = false;
      state.item.error = action.error;
    },
    [doRegiter.pending]: (state, action) => {
      state.register.loading = true;
    },
    [doRegiter.fulfilled]: (state, action) => {
      state.register.loading = false;
      state.register.result = action.payload;
    },
    [doRegiter.rejected]: (state, action) => {
      console.error("========> Error: ", action.error.message);
      message.error({
        content: "Đăng ky không thành công",
        className: "app-message",
      });
      state.item.loading = false;
      state.item.error = action.error;
    },
    [doForgotPassword.pending]: (state, action) => {
      state.forgotpassword.loading = true;
    },
    [doForgotPassword.fulfilled]: (state, action) => {
      state.forgotpassword.loading = false;
      state.forgotpassword.result = action.payload;
    },
    [doForgotPassword.rejected]: (state, action) => {
      console.error("========> Error: ", action.error.message);
      message.error({
        content: "Send to mail error",
        className: "app-message",
      });
      state.item.loading = false;
      state.item.error = action.error;
    },
    // [logout.pending]: (state, action) => {
    //   state.logout.loading = true;
    // },
    // [logout.fulfilled]: (state, action) => {
    //   state.logout.loading = false;
    //   state.logout.result = action.payload;
    //   localStorage.removeItem("userToken");
    //   localStorage.removeItem("userInfo");
    // },
    // [logout.rejected]: (state, action) => {
    //   console.error("========> Error: ", action.error.message);
    //   state.logout.loading = false;
    //   state.logout.error = action.error;
    // },
  },
});

export const user = (state) => state.user;
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
