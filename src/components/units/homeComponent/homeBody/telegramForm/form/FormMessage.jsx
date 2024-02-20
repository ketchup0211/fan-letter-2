import { configMessage } from "@/redux/modules/MainDataReducer";
import dynamicHeight from "@/util/setDynamicHeight";
import { useDispatch, useSelector } from "react-redux";
import style from "./FormMessage.module.css";
function FormMessage() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.MainDataReducer.message);

  const onMessageChange = (event) => {
    dynamicHeight(event);
    dispatch(configMessage(event.target.value));
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
