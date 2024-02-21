import { useSelector } from "react-redux";
import FormMessage from "./form/FormMessage";
import getCurrentTime from "@/util/getCurrentTime";
import FormSender from "./form/FormSender";
import style from "./TelegramForm.module.css";

function TelegramForm() {
  const { receiver, message } = useSelector((state) => state.MainDataReducer);
  const { avatar, nickname } = useSelector((store) => store.AuthReducer);
  const addLocalStorage = (event) => {
    //event.preventDefault();
    const creationTime = getCurrentTime();
    const newData = {
      message,
      sender: nickname,
      avatar,
      creationTime,
      id: crypto.randomUUID(),
    };

    const oldData = JSON.parse(localStorage.getItem(receiver) || "[]");
    const updatedData = [newData, ...oldData];

    localStorage.setItem(receiver, JSON.stringify(updatedData));
  };
  return (
    <form className={style.container} onSubmit={addLocalStorage}>
      <p className={style.receiver}>To. {receiver} 님께</p>
      <FormMessage />
      <FormSender />
      <button className={style.button}>전송하기</button>
    </form>
  );
}
export default TelegramForm;
