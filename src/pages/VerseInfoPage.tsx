import { FC } from "react";
import { useParams } from "react-router-dom";
import VerseTitle from "../components/VerseTitle";
import { GoBackBtn, VerseInfoList, VerseInfoText } from "../components";

const VerseInfoPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="max-w-5xl mx-auto w-11/12">
      <div className="flex flex-row-reverse justify-between items-center h-36">
        <VerseTitle id={id!} />
        <div className="flex flex-row gap-3">
          <GoBackBtn />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <VerseInfoList id={id!} />
        <VerseInfoText id={id!} />
      </div>
    </section>
  );
};

export default VerseInfoPage;
