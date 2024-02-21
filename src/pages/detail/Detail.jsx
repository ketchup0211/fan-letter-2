import { useParams } from "react-router-dom";
import DetailHeader from "@/components/units/detailComponent/detailHeader/DetailHeader";
import DetailBody from "@/components/units/detailComponent/detailBody/DetailBody";
import getLocalData from "@/util/getLocalData";
import {
  initSender,
  initReceiver,
  initMessage,
  initID,
} from "@/redux/modules/DetailDataReducer";
import { useDispatch } from "react-redux";
import { initModMessage } from "@/redux/modules/DetailModReducer";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();

  // Data Check
  const parsedData = getLocalData(params.receiver);
  const { sender, message, id } = parsedData.filter(
    (e) => e.id === params.id
  )[0];

  dispatch(initSender(sender));
  dispatch(initReceiver(params.receiver));
  dispatch(initMessage(message));
  dispatch(initID(id));
  dispatch(initModMessage(message));
  //  Main
  return (
    <>
      <DetailHeader />
      <DetailBody />
    </>
  );
}

export default Detail;
