import { FC } from "react";
import useSWR from "swr";
import APIClient from "../services/api-client";
import { Chapter, ChapterResponse } from "../interfaces";
import SearchItem from "./ChapterItem";
import { useFilterChapterStore } from "../stores";

const apiClient = new APIClient<ChapterResponse>();

const ChapterList: FC = () => {
  const {
    data: { chapters = [] } = {},
    isLoading,
    error,
  } = useSWR<ChapterResponse>("/chapters", (endpoint: string) =>
    apiClient.getAll(endpoint),
  );

  const { searchQuery, isAscending } = useFilterChapterStore((store) => ({
    searchQuery: store.searchQuery,
    isAscending: store.isAscending,
  }));

  let filteredChapters = chapters.filter((chapter: Chapter) => {
    return (
      chapter.name_simple.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.name_arabic.includes(searchQuery) ||
      chapter.id.toString().includes(searchQuery)
    );
  });

  filteredChapters = isAscending
    ? filteredChapters
    : filteredChapters.reverse();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {filteredChapters.map((chapter: Chapter) => (
        <SearchItem key={chapter.id} chapter={chapter} />
      ))}
    </ul>
  );
};

export default ChapterList;
