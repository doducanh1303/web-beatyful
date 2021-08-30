import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DO_LOGIN, DO_REGISTER, DO_SEND_MAIL, Do_LOGOUT } from "../user/type";
import { getApi, postApi } from "../api";
import { useHistory } from "react-router";

export const doLogin = createAsyncThunk(DO_LOGIN, async (params) => {
  const endpoint = `http://localhost:4000/api/login`;

  const response = await postApi(endpoint, params);
  console.log("run2.......", response);
  const data = response.data;

  localStorage.setItem("userToken", data.token);
  localStorage.setItem("userInfo", JSON.stringify(data.user));
  if (params.callback) {
    params.callback(data);
  }
  return data;
});

export const doRegiter = createAsyncThunk(DO_REGISTER, async (params) => {
  try {
    const endpoint = `http://localhost:4000/api/register`;

    const response = await postApi(endpoint, params);
    const data = response.data;
    console.log("data........", data);
    return data;
  } catch (err) {
    console.log("err........", err);
  }
});

export const doForgotPassword = createAsyncThunk(
  DO_SEND_MAIL,
  async (param) => {
    const endpoint = `http://localhost:4000/api/sendmail`;
    const response = postApi(endpoint, param);
    const data = response.data;
    return data;
  }
);

// export const logout = createAsyncThunk(Do_LOGOUT, async (params) => {
//   try {
//     const endponit = `http://localhost:4000/api/logout`;
//     const response = postApi(endponit, params);
//     const data = response.data;
//     localStorage.removeItem("userToken");
//     localStorage.removeItem("userInfo");

//     if (params.callback) {
//       params.callback(data);
//     }
//     return data;
//   } catch (err) {
//     console.log("err........", err);
//   }
// });
