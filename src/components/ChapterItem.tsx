import { FC } from "react";
import { Chapter } from "../interfaces";

type Props = {
  chapter: Chapter;
};

const ChapterItem: FC<Props> = ({ chapter }) => {
  return (
    <li className="flex flex-row items-center border-2 rounded-full p-1 border-orange-200">
      <div className="h-12 w-12 flex justify-center items-center rounded-full bg-orange-200">
        <span className="font-bold">{chapter.id}</span>
      </div>
      <div className="ml-4">
        <h2 className="font-bold">{chapter.name_simple}</h2>
        <span className="text-xs">{chapter.name_arabic}</span>
      </div>
      <div className="ml-auto mr-2">
        <span className="text-xs">
          <span className="font-bold">{chapter.verses_count}</span> Ayahs
        </span>
      </div>
    </li>
  );
};

export default ChapterItem;
