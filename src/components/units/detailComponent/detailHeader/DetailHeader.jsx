import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./DetailHeader.module.css";

//  DetailHeader.jsx
function DetailHeader() {
  const navigate = useNavigate();
  const { sender, receiver } = useSelector((state) => state.DetailDataReducer);
  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => navigate("/")}>
        홈으로
      </button>
      <p className={style.title}>
        {sender} 님이 {receiver} 님에게 보낸 전보
      </p>
    </div>
  );
}

export default DetailHeader;
