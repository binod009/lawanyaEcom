import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth_svc } from "../../components/service/auth.servies";

const initialState = {
  authdata: null,
  response: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout_user: (state, action) => {
      state.authdata = null;
      localStorage.clear();
    },
    set_loggedInUser: (state, action) => {
      state.authdata = action.payload;
    },
  },

  extraReducers: (builders) => {
    builders
      .addCase(getloggedInUser.fulfilled, (state, action) => {
        state.authdata = action.payload.loggedin_user;
      })
      .addCase(getloggedInUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const getloggedInUser = createAsyncThunk(
  "auth/getloggedInUser",
  async (RejectedWithValue) => {
    let token = localStorage.getItem("access_Token") ?? null;
    try {
      if (token) {
        let user = await auth_svc.getLoggedInUser();
        if (user) {
          return user.result;
        }
      }
    } catch (error) {
      return RejectedWithValue(error);
    }
  }
);

export const { set_loggedInUser, logout_user } = authSlice.actions;
export default authSlice.reducer;
