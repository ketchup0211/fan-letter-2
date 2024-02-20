import style from "./Login.module.css";
function Login() {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <p className={style.title}>로그인</p>
        <form className={style.form}>
          <input className={style.input} placeholder="ID" />
          <input className={style.input} placeholder="PW" />
        </form>
        <div className={style.buttons}>
          <button className={style.button}>로그인</button>
          <button className={style.button}>회원가입</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
