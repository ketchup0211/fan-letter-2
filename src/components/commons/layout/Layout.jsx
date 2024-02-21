import { Link } from "react-router-dom";
import style from "./Layout.module.css";
function Layout() {
  return (
    <div className={style.navigation}>
      <Link className={style.link} to="/home">
        Home
      </Link>
      <div className={style.buttons}>
        <button className={style.button}>내 프로필</button>
        <button className={style.button}>로그아웃</button>
      </div>
    </div>
  );
}
export default Layout;
