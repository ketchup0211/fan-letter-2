import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/home/Home.jsx";
import Detail from "../pages/detail/Detail.jsx";
import Login from "@/pages/login/Login.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:receiver/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
