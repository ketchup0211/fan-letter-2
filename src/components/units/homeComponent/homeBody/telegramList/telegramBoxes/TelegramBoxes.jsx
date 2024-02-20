import getLocalData from "@/util/getLocalData";
import TelegramBox from "./telegramBox/TelegramBox";
import { useSelector } from "react-redux";

function TelegramBoxes() {
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
  const data = getLocalData(receiver);
  return (
    <>
      {data.map(({ id, sender, message, creationTime }) => (
        <TelegramBox
          key={id}
          sender={sender}
          receiver={receiver}
          message={message}
          creationTime={creationTime}
          id={id}
        ></TelegramBox>
      ))}
    </>
  );
}

export default TelegramBoxes;
