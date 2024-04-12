import { FC } from "react";
import { Surah } from "../interfaces";

type Props = {
  surah: Surah;
};

const SearchItem: FC<Props> = ({ surah }) => {
  return (
    <li className="flex flex-row items-center border-2 rounded-full p-1 border-orange-200">
      <div className="h-12 w-12 flex justify-center items-center rounded-full bg-orange-200">
        <span className="font-bold">{surah.number}</span>
      </div>
      <div className="ml-4">
        <h2 className="font-bold">{surah.englishName}</h2>
        <span className="text-xs">{surah.name}</span>
      </div>
      <div className="ml-auto mr-2">
        <span className="text-xs">
          <span className="font-bold">{surah.numberOfAyahs}</span> Ayahs
        </span>
      </div>
    </li>
  );
};

export default SearchItem;
