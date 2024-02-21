import { createSlice } from "@reduxjs/toolkit";
//  redux 모듈로 authSlice.js 를 만들고 로그인 상태를 전역 상태로 관리하도록 하세요.
const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
