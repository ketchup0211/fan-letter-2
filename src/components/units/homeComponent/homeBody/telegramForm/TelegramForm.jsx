import { useSelector } from "react-redux";
import FormMessage from "./form/FormMessage";
import getCurrentTime from "@/util/getCurrentTime";

function TelegramForm() {
  const { receiver, sender, message } = useSelector(
    (state) => state.MainDataReducer
  );

  const addLocalStorage = () => {
    const creationTime = getCurrentTime();
    const newData = {
      message,
      sender,
      creationTime,
      id: uuid(),
    };

    const oldData = JSON.parse(localStorage.getItem(receiver) || "[]");
    const updatedData = [newData, ...oldData];

    localStorage.setItem(receiver, JSON.stringify(updatedData));
  };
  return (
    <form onSubmit={addLocalStorage}>
      <p>To. {receiver} 님께</p>
      <FormMessage />
      <FormMessage />
      <button>전송하기</button>
    </form>
  );
}
export default TelegramForm;
