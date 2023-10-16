import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerAccount = createAsyncThunk(
  "account/registerAccount",
  async (body) => {
    await axios.post("http://localhost:8888/api/auth/register", body);
  }
);

export const loginAcoount = createAsyncThunk(
  "account/loginAccount",
  async ({ user, navigate }) => {
    const { data } = await axios.post(
      "http://localhost:8888/api/auth/login",
      user,
      {
        withCredentials: true,
      }
    );
    return { data, navigate };
  }
);
