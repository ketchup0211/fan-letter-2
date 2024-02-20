import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sender: "",
  receiver: "",
  message: "",
  id: "",
};

const detailDataSlice = createSlice({
  name: "detailData",
  initialState,
  reducers: {
    initSender: (state, action) => {
      return {
        ...state,
        sender: action.payload,
      };
    },

    initReceiver: (state, action) => {
      return {
        ...state,
        receiver: action.payload,
      };
    },

    initMessage: (state, action) => {
      return {
        ...state,
        message: action.payload,
      };
    },

    initID: (state, action) => {
      return {
        ...state,
        id: action.payload,
      };
    },

    updateMessage: (state, action) => {
      return {
        ...state,
        message: action.payload,
      };
    },
  },
});

export const { initSender, initReceiver, initMessage, initID, updateMessage } =
  detailDataSlice.actions;

export default detailDataSlice.reducer;
