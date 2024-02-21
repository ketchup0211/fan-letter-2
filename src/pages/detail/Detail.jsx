import { useParams } from "react-router-dom";
import DetailHeader from "@/components/units/detailComponent/detailHeader/DetailHeader";
import DetailBody from "@/components/units/detailComponent/detailBody/DetailBody";
import {
  initSender,
  initReceiver,
  initMessage,
  initID,
} from "@/redux/modules/DetailDataReducer";
import { useDispatch } from "react-redux";
import { initModMessage } from "@/redux/modules/DetailModReducer";
import getIsValidUser from "@/util/getIsValidUser";
import { useEffect, useState } from "react";
import { logOut } from "@/redux/modules/AuthReducer";
import axios from "axios";
const DB_URL = "http://localhost:4000";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const getLetters = async () => {
      let isValidUser = await getIsValidUser(accessToken);
      if (isValidUser) {
        try {
          const response = await axios.get(DB_URL + "/letters");
          const selectedLetter = response.data.find(
            (item) => item.id === params.id
          );
          const { sender, receiver, message, id } = selectedLetter;
          dispatch(initSender(sender));
          dispatch(initReceiver(receiver));
          dispatch(initMessage(message));
          dispatch(initID(id));
          dispatch(initModMessage(message));
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
        dispatch(logOut());
      }
    };

    getLetters();
  }, []);

  //  Main
  return (
    <>
      <DetailHeader />
      <DetailBody />
    </>
  );
}

export default Detail;
