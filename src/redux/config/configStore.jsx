import detailData from "../modules/DetailDataReducer";
import detailMod from "../modules/DetailModReducer";
import mainData from "../modules/MainDataReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    DetailDataReducer: detailData,
    DetailModReducer: detailMod,
    MainDataReducer: mainData,
  },
});

export default store;
