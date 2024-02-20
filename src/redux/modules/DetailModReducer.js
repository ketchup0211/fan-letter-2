import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modify: false,
  message: "",
};
const detailModSlice = createSlice({
  name: "detailMod",
  initialState,
  reducers: {
    toggleMod: (state, action) => {
      return {
        ...state,
        modify: !state.modify,
      };
    },
    initModMessage: (state, action) => {
      return {
        ...state,
        message: action.payload,
      };
    },
    modifyMessage: (state, action) => {
      return {
        ...state,
        message: action.payload,
      };
    },
  },
});

export const { toggleMod, initModMessage, modifyMessage } =
  detailModSlice.actions;
export default detailModSlice.reducer;
