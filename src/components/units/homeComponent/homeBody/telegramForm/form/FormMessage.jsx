import { configMessage } from "@/redux/modules/MainDataReducer";
import dynamicHeight from "@/util/setDynamicHeight";
import { useDispatch, useSelector } from "react-redux";
import style from "./FormMessage.module.css";
import getIsValidUser from "@/util/getIsValidUser";
import { logOut } from "@/redux/modules/AuthReducer";
function FormMessage() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.MainDataReducer.message);
  const accessToken = localStorage.getItem("accessToken");

  const onMessageChange = async (event) => {
    dynamicHeight(event);
    let isValidUser = await getIsValidUser(accessToken);
    if (isValidUser) {
      dispatch(configMessage(event.target.value));
    } else {
      alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
      dispatch(logOut());
    }
  };
  return (
    <textarea
      className={style.message}
      type="text"
      name="message"
      placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
      onChange={onMessageChange}
      maxLength={150}
      value={message}
      required
    />
  );
}

export default FormMessage;
