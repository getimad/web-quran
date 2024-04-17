import { FC } from "react";
import { useParams } from "react-router-dom";
import VerseList from "../components/VerseList";

const VersePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="max-w-5xl mx-auto w-11/12">
      <VerseList id={id!} />
    </section>
  );
};

export default VersePage;
