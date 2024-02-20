import { useNavigate } from "react-router-dom";

function TelegramBox({ sender, receiver, message, creationTime, id }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`detail/${receiver}/${id}`)}>
      <img src="/images/profile.jpg" alt="profile" />
      <div>
        <p>{sender}</p>
        <p>{creationTime}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default TelegramBox;
