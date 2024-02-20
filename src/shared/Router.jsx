import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/home/Home.jsx";
import Detail from "../pages/detail/Detail.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:receiver/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
