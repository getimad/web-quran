import { FC, useEffect, useState } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTopBtn: FC = () => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onhandleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    !isAtTop && (
      <button
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full border-orange-200 bg-orange-200/50 border backdrop-blur-sm"
        onClick={onhandleScroll}
      >
        <FontAwesomeIcon className="text-orange-800" icon={faArrowUp} />
      </button>
    )
  );
};

export default ScrollTopBtn;
