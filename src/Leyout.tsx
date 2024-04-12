import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./Leyout.css";

const Leyout: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Leyout;
