import { FC } from "react";
import { useParams } from "react-router-dom";
import VerseText from "../components/VerseList";

const VersePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="max-w-5xl mx-auto w-11/12">
      <VerseText id={id!} />
    </section>
  );
};

export default VersePage;
