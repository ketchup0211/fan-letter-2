import { useSelector } from "react-redux";
import style from "./FormSender.module.css";
function FormSender() {
  const sender = useSelector((state) => state.AuthReducer.nickname);
  return <p className={`${style.sender}`}>From. {sender}</p>;
}

export default FormSender;
