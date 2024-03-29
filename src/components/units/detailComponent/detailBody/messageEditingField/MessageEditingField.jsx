import { useDispatch, useSelector } from "react-redux";
import { modifyMessage } from "@/redux/modules/DetailModReducer";
import style from "./MessageEditingField.module.css";
//  MessageEditingField.jsx
function MessageEditingField() {
  const dispatch = useDispatch();
  const modMessage = useSelector((state) => state.DetailModReducer.message);

  const handleModifyMessage = (e) => {
    dispatch(modifyMessage(e.target.value));
  };
  return (
    <textarea
      className={style.field}
      type="text"
      name="message"
      maxLength={150}
      value={modMessage}
      onChange={handleModifyMessage}
      placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
      autoFocus
      required
    />
  );
}

export default MessageEditingField;
