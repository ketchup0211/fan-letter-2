import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sender: "",
  receiver: "침착맨",
  message: "",
};

const mainDataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    configSender: (state, action) => {
      return {
        ...state,
        sender: action.payload,
      };
    },
    configReceiver: (state, action) => {
      return {
        ...state,
        receiver: action.payload,
      };
    },
    configMessage: (state, action) => {
      return {
        ...state,
        message: action.payload,
      };
    },
  },
});

export const { configSender, configReceiver, configMessage } =
  mainDataSlice.actions;
export default mainDataSlice.reducer;
