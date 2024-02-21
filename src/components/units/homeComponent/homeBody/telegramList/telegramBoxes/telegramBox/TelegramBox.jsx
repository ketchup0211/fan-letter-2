import { useNavigate } from "react-router-dom";
import style from "./TelegramBox.module.css";
function TelegramBox({ sender, receiver, message, creationTime, id }) {
  const navigate = useNavigate();
  return (
    <div
      className={style.container}
      onClick={() => navigate(`/detail/${receiver}/${id}`)}
    >
      <img className={style.image} src="/images/profile.jpg" alt="profile" />
      <div className={style.contents}>
        <p className={style.sender}>{sender}</p>
        <p className={style.time}>{creationTime}</p>
        <p className={style.message}>{message}</p>
      </div>
    </div>
  );
}

export default TelegramBox;
