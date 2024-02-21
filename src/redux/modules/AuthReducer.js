import { createSlice } from "@reduxjs/toolkit";
//  redux 모듈로 authSlice.js 를 만들고 로그인 상태를 전역 상태로 관리하도록 하세요.
const initialState = {
  isLoggedIn: !!localStorage.getItem("accessToken"),
  avatar: localStorage.getItem("avatar"),
  nickname: localStorage.getItem("nickname"),
  userId: localStorage.getItem("userId"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      const { accessToken, avatar, nickname, userId } = action.payload;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("userId", userId);

      state.isLoggedIn = true;
      state.avatar = avatar;
      state.nickname = nickname;
      state.userId = userId;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
