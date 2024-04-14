import { FC } from "react";
import useSWR from "swr";
import APIClient from "../services/api-client";
import { Chapter, ChapterResponse } from "../interfaces";
import SearchItem from "./SearchItem";

const apiClient = new APIClient<ChapterResponse>();

const SearchResult: FC = () => {
  const {
    data: { chapters = [] } = {},
    isLoading,
    error,
  } = useSWR<ChapterResponse>("/chapters", (endpoint: string) =>
    apiClient.getAll(endpoint),
  );

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {chapters.map((chapter: Chapter) => (
        <SearchItem key={chapter.id} chapter={chapter} />
      ))}
    </ul>
  );
};

export default SearchResult;
