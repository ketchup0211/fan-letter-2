import { useSelector } from "react-redux";
import TelegramBoxes from "./telegramBoxes/TelegramBoxes";
import getLocalData from "@/util/getLocalData";
import style from "./TelegramList.module.css";

function TelegramList() {
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
  const data = getLocalData(receiver);
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
