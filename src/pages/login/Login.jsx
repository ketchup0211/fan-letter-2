import LoginForm from "@/components/units/loginComponent/loginForm/LoginForm";
import style from "./Login.module.css";
import SignUpForm from "@/components/units/loginComponent/signUpForm/SignUpForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState(true);
  const isLoggedIn = useSelector((store) => store.AuthReducer.isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  } else {
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
}
export default Login;
