import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//  DetailHeader.jsx
function DetailHeader() {
  const navigate = useNavigate();
  const { sender, receiver } = useSelector((state) => state.DetailDataReducer);
  return (
    <div>
      <button onClick={() => navigate("/")}>홈으로</button>
      <p>
        {sender} 님이 {receiver} 님에게 보낸 전보
      </p>
    </div>
  );
}

export default DetailHeader;
