import { FC } from "react";
import { useFilterChapterStore } from "../stores";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const ChapterFilter: FC = () => {
  const { searchQuery, setSearchQuery, isAscending, setIsAscending } =
    useFilterChapterStore();

  return (
    <article className="w-full">
      <div className="flex justify-between gap-3 mt-6 text-sm text-orange-800 bg-orange-200 rounded-full px-3">
        <div className="flex flex-row gap-2 items-center w-full">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className="bg-transparent w-full outline-none h-8 font-medium"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for surah..."
          />
        </div>
        <button
          className="flex flex-row gap-2 items-center font-medium"
          onClick={() => setIsAscending(!isAscending)}
        >
          {isAscending ? (
            <>
              Ascending
              <FontAwesomeIcon icon={faCaretDown} />
            </>
          ) : (
            <>
              Descending
              <FontAwesomeIcon icon={faCaretUp} />
            </>
          )}
        </button>
      </div>
    </article>
  );
};

export default ChapterFilter;
