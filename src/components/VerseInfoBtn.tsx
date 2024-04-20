import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const VerseInfoBtn: FC = () => {
  return (
    <NavLink
      className="h-12 w-12 rounded-full bg-orange-200/50 border border-orange-200 text-orange-800 backdrop-blur-md grid place-items-center"
      to="info"
    >
      <FontAwesomeIcon icon={faInfo} />
    </NavLink>
  );
};

export default VerseInfoBtn;
