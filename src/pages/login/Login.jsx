import LoginForm from "@/components/units/loginComponent/loginForm/LoginForm";
import style from "./Login.module.css";
import SignUpForm from "@/components/units/loginComponent/signUpForm/SignUpForm";
import { useState } from "react";

function Login() {
  const [login, setLogin] = useState(true);
  return (
    <div className={style.body}>
      <div className={style.container}>
        {login ? (
          <LoginForm setLogin={setLogin} />
        ) : (
          <SignUpForm setLogin={setLogin} />
        )}
      </div>
    </div>
  );
}
export default Login;
