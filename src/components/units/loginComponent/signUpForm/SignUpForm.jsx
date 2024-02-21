import style from "./SignUpForm.module.css";
function SignUpForm({ setLogin }) {
  const handleSignUp = () => {};

  const handleToggleLogin = () => {
    setLogin(true);
  };
  return (
    <>
      <p className={style.title}>회원가입</p>
      <form className={style.form}>
        <input className={style.input} placeholder="ID" />
        <input className={style.input} placeholder="PW" />
        <input className={style.input} placeholder="Nickname" />
      </form>
      <div className={style.buttons}>
        <button
          className={`${style.button} ${style.active}`}
          onClick={handleSignUp}
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
