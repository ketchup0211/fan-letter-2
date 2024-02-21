import { useSelector } from "react-redux";
import FormMessage from "./form/FormMessage";
import getCurrentTime from "@/util/getCurrentTime";
import FormSender from "./form/FormSender";
import style from "./TelegramForm.module.css";
import axios from "axios";
const DB_URL = "http://localhost:4000";

function TelegramForm() {
  const { receiver, message } = useSelector((state) => state.MainDataReducer);
  const { avatar, nickname, userId } = useSelector(
    (store) => store.AuthReducer
  );

  const setLetters = async (newLetter) => {
    try {
      await axios.post(DB_URL + "/letters", newLetter);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const addLetter = async (event) => {
    const creationTime = getCurrentTime();
    const newLetter = {
      sender: nickname,
      userId,
      receiver,
      message,
      avatar,
      creationTime,
      id: crypto.randomUUID(),
    };

    const success = await setLetters(newLetter);
    return success ? null : alert("메세지 저장에 실패하였습니다.");
  };

  return (
    <form className={style.container} onSubmit={addLetter}>
      <p className={style.receiver}>To. {receiver} 님께</p>
      <FormMessage />
      <FormSender />
      <button className={style.button}>전송하기</button>
    </form>
  );
}
export default TelegramForm;
