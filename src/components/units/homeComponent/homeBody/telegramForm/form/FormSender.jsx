import { configSender } from "@/redux/modules/MainDataReducer";
import { useDispatch, useSelector } from "react-redux";

function FormSender() {
  const dispatch = useDispatch();
  const sender = useSelector((state) => state.MainDataReducer.sender);

  const onSenderChange = (event) => {
    dispatch(configSender(event.target.value));
  };
  return (
    <p>
      From.{" "}
      <input
        type="text"
        name="nickname"
        placeholder="닉네임(최대 10자)"
        autoComplete="off"
        onChange={onSenderChange}
        maxLength={10}
        value={sender}
        required
      />
    </p>
  );
}

export default FormSender;
