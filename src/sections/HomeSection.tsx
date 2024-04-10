import { FC } from "react";
import { SearchBar, SearchResult } from "../components";

const HomeSection: FC = () => {
  return (
    <section className="max-w-5xl mx-auto relative w-11/12">
      <div className="flex flex-col gap-16 items-center flex-shrink absolute translate-y-1/2 w-full">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-julius text-orange-800">
          Quran
        </h1>
        <SearchBar />
        <SearchResult />
      </div>
    </section>
  );
};

export default HomeSection;
