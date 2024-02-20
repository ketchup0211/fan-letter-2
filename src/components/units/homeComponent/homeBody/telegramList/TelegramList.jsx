import TelegramBoxes from "./telegramBoxes/TelegramBoxes";

function TelegramList() {
  return (
    <div>
      {data.length > 0 ? <TelegramBoxes /> : <div>도착한 전보가 없습니다.</div>}
    </div>
  );
}
export default TelegramList;
