import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./Leyout.css";
import { ScrollTopBtn } from "./components";

const Leyout: FC = () => {
  return (
    <>
      <Outlet />
      <ScrollTopBtn />
    </>
  );
};

export default Leyout;
