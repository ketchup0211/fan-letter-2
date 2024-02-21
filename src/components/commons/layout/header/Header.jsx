import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useDispatch } from "react-redux";
import { logOut } from "@/redux/modules/AuthReducer";
function Header() {
  const dispatch = useDispatch();
  const handleLogOut = (event) => {
    event.preventDefault();
    dispatch(logOut());
  };
  return (
    <div className={style.navigation}>
      <Link className={style.link} to="/home">
        Home
      </Link>
      <div className={style.buttons}>
        <button className={style.button}>내 프로필</button>
        <button className={style.button} onClick={handleLogOut}>
          로그아웃
        </button>
      </div>
    </div>
  );
}
export default Header;
