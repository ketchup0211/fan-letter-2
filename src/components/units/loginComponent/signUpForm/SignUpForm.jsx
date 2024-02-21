import { useState } from "react";
import style from "./SignUpForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/modules/AuthReducer";
import axios from "axios";
const SERVER_API_URL = "https://moneyfulpublicpolicy.co.kr";

function SignUpForm({ setLogin }) {
  const dispatch = useDispatch();
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
  const handleSignUp = async (event) => {
    event.preventDefault();
    if (isValid({ id: newID, password: newPW, nickname: newNickname })) {
      try {
        const { data } = await axios.post(SERVER_API_URL + "/register", {
          id: newID,
          password: newPW,
          nickname: newNickname,
        });
        if (data.success) {
          alert("회원가입 성공");
          dispatch(logIn());
        }
      } catch (error) {
        alert(`회원가입 실패. ${error.message}.\n ERROR CODE : ${error.code}`);
      }
    } else {
      return;
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
    return nickname.length > 0 && nickname.length < 11;
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
