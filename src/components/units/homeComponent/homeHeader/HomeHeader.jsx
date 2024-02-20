import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <div>
      <h1 title="침하하 바로가기"></h1>
      <Link to="https://chimhaha.net" target="_blank">
        침하하
      </Link>
      <p>17개 국에 전보 보내기</p>
    </div>
  );
}
export default HomeHeader;
