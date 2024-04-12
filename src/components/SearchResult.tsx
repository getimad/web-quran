import { FC } from "react";
import useSWR from "swr";
import APIClient from "../services/api-client";
import { FetchResponse, Surah } from "../interfaces";
import { useSearchStore } from "../stores";
import SearchItem from "./SearchItem";

const apiClient = new APIClient<Surah>();

const SearchResult: FC = () => {
  const { searchQuery } = useSearchStore((store) => ({
    searchQuery: store.searchQuery,
  }));

  const {
    data: { data: surahs } = {},
    isLoading,
    error,
  } = useSWR<FetchResponse<Surah[]>>("/surah", (endpoint: string) =>
    apiClient.getAll(endpoint),
  );

  const surahsFiltered = searchQuery
    ? surahs?.filter((surah: Surah) =>
        surah.englishName.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : surahs;

  return (
    surahsFiltered && (
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {surahsFiltered.map((surah: Surah) => (
          <SearchItem surah={surah} />
        ))}
      </ul>
    )
  );
};

export default SearchResult;
