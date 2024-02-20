import charactersDataList from "@/shared/charactersDataList";
import { useDispatch, useSelector } from "react-redux";
function NameBoxes() {
  const dispatch = useDispatch();
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
  return (
    <>
      {charactersDataList.map((character) => (
        <button
          key={character}
          onClick={() => dispatch(configReceiver(character))}
          selected={receiver === character}
        >
          {character}
        </button>
      ))}
    </>
  );
}

export default NameBoxes;
