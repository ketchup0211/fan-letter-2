import { useDispatch, useSelector } from "react-redux";
import TelegramBoxes from "./telegramBoxes/TelegramBoxes";
import style from "./TelegramList.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import getIsValidUser from "@/util/getIsValidUser";
import { logOut } from "@/redux/modules/AuthReducer";
const DB_URL = "http://localhost:4000";
//const QUERY_PARAMETER = "?_sort=creationTime&_order=desc";

function TelegramList() {
  const dispatch = useDispatch();
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
  const [letters, setLetters] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const getLetters = async () => {
      let isValidUser = await getIsValidUser(accessToken);
      if (isValidUser) {
        try {
          const response = await axios.get(DB_URL + "/letters");
          const filteredLetters = response.data.filter(
            (item) => item.receiver === receiver
          );
          setLetters([...filteredLetters].reverse());
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
        dispatch(logOut());
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
