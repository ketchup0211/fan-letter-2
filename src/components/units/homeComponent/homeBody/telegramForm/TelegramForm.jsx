import { useDispatch, useSelector } from "react-redux";
import FormMessage from "./form/FormMessage";
import getCurrentTime from "@/util/getCurrentTime";
import FormSender from "./form/FormSender";

function TelegramForm() {
  const { receiver, sender, message } = useSelector(
    (state) => state.MainDataReducer
  );

  const addLocalStorage = (event) => {
    event.preventDefault();
    const creationTime = getCurrentTime();
    const newData = {
      message,
      sender,
      creationTime,
      id: crypto.randomUUID(),
    };

    const oldData = JSON.parse(localStorage.getItem(receiver) || "[]");
    const updatedData = [newData, ...oldData];

    localStorage.setItem(receiver, JSON.stringify(updatedData));
    console.log("SUCCESS");
  };
  return (
    <form onSubmit={addLocalStorage}>
      <p>To. {receiver} 님께</p>
      <FormMessage />
      <FormSender />
      <button>전송하기</button>
    </form>
  );
}
export default TelegramForm;
