import { configReceiver } from "@/redux/modules/MainDataReducer";
import charactersDataList from "@/shared/charactersDataList";
import { useDispatch, useSelector } from "react-redux";
import style from "./NameBoxes.module.css";
function NameBoxes() {
  const dispatch = useDispatch();
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
  return (
    <>
      {charactersDataList.map((character) => {
        return (
          <button
            className={style.button}
            key={character}
            onClick={() => dispatch(configReceiver(character))}
            style={receiver === character ? { backgroundColor: "#fca600" } : {}}
          >
            {character}
          </button>
        );
      })}
    </>
  );
}

export default NameBoxes;
