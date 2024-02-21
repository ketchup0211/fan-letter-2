import { useState } from "react";
import style from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/modules/AuthReducer";
import axios from "axios";
const SERVER_API_URL = "https://moneyfulpublicpolicy.co.kr";

function LoginForm({ setLogin }) {
  const dispatch = useDispatch();
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const filled = userID !== "" && userPW !== "";
  const handleInput = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "id":
        setUserID(event.target.value);
        break;
      case "password":
        setUserPW(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(SERVER_API_URL + "/login", {
        id: userID,
        password: userPW,
      });
      if (data.success) {
        alert("로그인 성공");
        dispatch(logIn());
      }
    } catch (error) {
      alert(`로그인 실패. ${error.message}.\n ERROR CODE : ${error.code}`);
    }
  };

  const handleToggleSignUp = () => {
    setLogin(false);
  };
  return (
    <>
      <p className={style.title}>로그인</p>
      <form className={style.form}>
        <input
          className={style.input}
          placeholder="ID"
          value={userID}
          onChange={handleInput}
          type="text"
          name="id"
          autoComplete="off"
        />
        <input
          className={style.input}
          placeholder="PW"
          value={userPW}
          onChange={handleInput}
          type="password"
          name="password"
        />
      </form>
      <div className={style.buttons}>
        <button
          className={`${style.button} ${
            !filled ? style.disabled : style.active
          }`}
          onClick={handleLogin}
          disabled={!filled}
        >
          로그인
        </button>
        <button className={style.button} onClick={handleToggleSignUp}>
          회원가입
        </button>
      </div>
    </>
  );
}
export default LoginForm;
