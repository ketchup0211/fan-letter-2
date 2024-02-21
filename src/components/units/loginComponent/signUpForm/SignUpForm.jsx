import { useState } from "react";
import style from "./SignUpForm.module.css";
function SignUpForm({ setLogin }) {
  const [newID, setNewID] = useState("");
  const [newPW, setNewPW] = useState("");
  const [newNickname, setNewnickname] = useState("");
  const filled = newID !== "" && newPW !== "" && newNickname !== "";
  const handleInput = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "id":
        setNewID(event.target.value);
        break;
      case "password":
        setNewPW(event.target.value);
        break;
      case "nickname":
        setNewnickname(event.target.value);
      default:
        return;
    }
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    if (isValid) {
      //SignUp
    } else {
      //return
    }
  };

  const handleToggleLogin = () => {
    setLogin(true);
  };
  const isValid = ({ id, password, nickname }) => {
    if (!_isValidID(id)) {
      alert("ID의 길이를 4~10글자로 설정해주세요");
      return false;
    }

    if (!_isValidPW(password)) {
      alert("PW의 길이를 4~15글자로 설정해주세요");
      return false;
    }

    if (!_isValidNickname(nickname)) {
      alert("닉네임의 길이를 1~10글자로 설정해주세요");
      return false;
    }

    return true;
  };
  const _isValidID = (id) => {
    return id.length > 3 && id.length < 11;
  };
  const _isValidPW = (password) => {
    return password.length > 3 && password.length < 16;
  };
  const _isValidNickname = (nickname) => {
    return password.length > 0 && password.length < 11;
  };
  return (
    <>
      <p className={style.title}>회원가입</p>
      <form className={style.form}>
        <input
          className={style.input}
          placeholder="ID"
          value={newID}
          onChange={handleInput}
          type="text"
          name="id"
          autoComplete="off"
        />
        <input
          className={style.input}
          placeholder="PW"
          value={newPW}
          onChange={handleInput}
          type="password"
          name="password"
        />
        <input
          className={style.input}
          placeholder="Nickname"
          value={newNickname}
          onChange={handleInput}
          type="text"
          name="nickname"
        />
      </form>
      <div className={style.buttons}>
        <button
          className={`${style.button} ${
            !filled ? style.disabled : style.active
          }`}
          onClick={handleSignUp}
          disabled={!filled}
        >
          회원가입
        </button>
        <button className={style.button} onClick={handleToggleLogin}>
          로그인
        </button>
      </div>
    </>
  );
}
export default SignUpForm;
