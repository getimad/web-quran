import { FC } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar: FC = () => {
  return (
    <article className="w-full">
      <div className="relative">
        <FontAwesomeIcon
          className="absolute -translate-y-1/2 top-1/2 left-8 text-orange-800"
          icon={faMagnifyingGlass}
          size="xl"
        />
        <input
          className="w-full h-20 pl-20 pr-8 rounded-full outline-none text-lg  font-bold text-orange-800"
          type="search"
          placeholder="Search for surah..."
        />
      </div>
    </article>
  );
};

export default SearchBar;
