import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/home/Home.jsx";
import Detail from "../pages/detail/Detail.jsx";
import Login from "@/pages/login/Login.jsx";
import { useSelector } from "react-redux";

const Router = () => {
  const isLoggedIn = useSelector((store) => store.AuthReducer.isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:receiver/:id" element={<Detail />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
