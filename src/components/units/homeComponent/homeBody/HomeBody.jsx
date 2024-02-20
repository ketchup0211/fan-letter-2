import HorizontalScrollBox from "./horizontalScrollBox/HorizontalScrollBox.jsx";
import TelegramForm from "./telegramForm/TelegramForm.jsx";
import TelegramList from "./telegramList/TelegramList.jsx";
function HomeBody() {
  return (
    <>
      <HorizontalScrollBox />
      <TelegramForm />
      <TelegramList />
    </>
  );
}
export default HomeBody;
