import style from "./LoginForm.module.css";
function LoginForm({ setLogin }) {
  const handleLogin = () => {};

  const handleToggleSignUp = () => {
    setLogin(false);
  };
  return (
    <>
      <p className={style.title}>로그인</p>
      <form className={style.form}>
        <input className={style.input} placeholder="ID" />
        <input className={style.input} placeholder="PW" />
      </form>
      <div className={style.buttons}>
        <button
          className={`${style.button} ${style.active}`}
          onClick={handleLogin}
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
