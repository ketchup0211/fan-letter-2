import { useSelector } from "react-redux";
import TelegramBoxes from "./telegramBoxes/TelegramBoxes";
import getLocalData from "@/util/getLocalData";
import style from "./TelegramList.module.css";
import axios from "axios";
const DB_URL = "http://localhost:4000";

function TelegramList() {
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
  const data = getLocalData(receiver);
  const getLetters = async () => {
    try {
      const response = await axios.get(DB_URL + "/letters");
      console.log("getLetters");
      console.log(response.data.filter((item) => item.receiver === receiver));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  getLetters();
  return (
    <div className={style.container}>
      {data.length > 0 ? (
        <TelegramBoxes />
      ) : (
        <div className={style.alert}>도착한 전보가 없습니다.</div>
      )}
    </div>
  );
}
export default TelegramList;
