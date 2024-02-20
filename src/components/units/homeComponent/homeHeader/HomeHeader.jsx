import { Link } from "react-router-dom";
import style from "./HomeHeader.module.css";
function HomeHeader() {
  return (
    <div className={style.banner}>
      <h1 className={style.title} title="침하하 바로가기">
        <Link className={style.link} to="https://chimhaha.net" target="_blank">
          침하하
        </Link>
      </h1>
      <p className={style.subtitle}>17개 국에 전보 보내기</p>
    </div>
  );
}
export default HomeHeader;
