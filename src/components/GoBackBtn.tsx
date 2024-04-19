import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const GoBackBtn: FC = () => {
  const onGoBack = () => {
    window.history.back();
  };

  return (
    <button
      className="h-12 w-12 rounded-full bg-orange-200/50 border border-orange-200 text-orange-800 backdrop-blur-md"
      onClick={onGoBack}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default GoBackBtn;
