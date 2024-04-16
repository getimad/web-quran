import { FC } from "react";
import { ChapterIFilter, ChapterList } from "../components";

const HomePage: FC = () => {
  return (
    <section className="max-w-5xl mx-auto w-11/12">
      <div className="flex flex-col gap-12 w-full mt-32">
        <h1 className="text-7xl text-center md:text-8xl lg:text-9xl font-julius text-orange-800">
          Quran
        </h1>
        <article className="flex flex-col gap-4">
          <ChapterIFilter />
          <ChapterList />
        </article>
      </div>
    </section>
  );
};

export default HomePage;
