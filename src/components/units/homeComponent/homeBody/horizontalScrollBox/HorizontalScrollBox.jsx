import NameBoxes from "./nameBoxes/NameBoxes";
import style from "./HorizontalScrollBox.module.css";
function HorizontalScrollBox() {
  return (
    <div className={style.container}>
      <NameBoxes />
    </div>
  );
}
export default HorizontalScrollBox;
