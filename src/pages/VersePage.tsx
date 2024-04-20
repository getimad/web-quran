import { FC } from "react";
import { useParams } from "react-router-dom";
import VerseList from "../components/VerseList";
import VerseTitle from "../components/VerseTitle";
import { GoBackBtn, VerseInfoBtn } from "../components";

const VersePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="max-w-5xl mx-auto w-11/12">
      <div className="flex flex-row-reverse justify-between items-center h-36">
        <VerseTitle id={id!} />
        <div className="flex flex-row gap-3">
          <GoBackBtn />
          <VerseInfoBtn />
        </div>
      </div>
      <VerseList id={id!} />
    </section>
  );
};

export default VersePage;
