import { useSelector } from "react-redux";
import TelegramBoxes from "./telegramBoxes/TelegramBoxes";
import style from "./TelegramList.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
const DB_URL = "http://localhost:4000";
//const QUERY_PARAMETER = "/?_sort=creationTime";

function TelegramList() {
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
  const [letters, setLetters] = useState([]);
  useEffect(() => {
    const getLetters = async () => {
      try {
        const response = await axios.get(DB_URL + "/letters");
        const filteredLetters = response.data.filter(
          (item) => item.receiver === receiver
        );
        setLetters([...filteredLetters].reverse());
      } catch (error) {
        console.error(error);
      }
    };

    getLetters();
  }, [receiver]);

  return (
    <div className={style.container}>
      {letters.length > 0 ? (
        <TelegramBoxes letters={letters} />
      ) : (
        <div className={style.alert}>도착한 전보가 없습니다.</div>
      )}
    </div>
  );
}
export default TelegramList;
