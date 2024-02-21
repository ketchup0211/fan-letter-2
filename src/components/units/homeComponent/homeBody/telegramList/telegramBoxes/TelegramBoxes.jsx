import { useEffect, useState } from "react";
import TelegramBox from "./telegramBox/TelegramBox";
import { useSelector } from "react-redux";

function TelegramBoxes({ letters }) {
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
  const [data, setData] = useState(letters);

  useEffect(() => {
    setData(letters);
  }, [letters]);
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
