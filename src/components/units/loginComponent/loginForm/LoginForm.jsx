import { useState } from "react";
import style from "./LoginForm.module.css";
function LoginForm({ setLogin }) {
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

  const handleLogin = (event) => {
    event.preventDefault();
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
