import { FC } from "react";
import { VerseResponse, SingleChapterResponse } from "../interfaces";
import useSWR from "swr";
import APIClient from "../services/api-client";
import VerseItem from "./VerseItem";

type Props = {
  id: string;
};

const apiClientVerse = new APIClient<VerseResponse>();
const apiClientChapter = new APIClient<SingleChapterResponse>();

const VerseList: FC<Props> = ({ id }) => {
  const {
    data: { verses = [] } = {},
    isLoading,
    error,
  } = useSWR<VerseResponse>(
    `/quran/verses/imlaei?chapter_number=${id}`,
    (endpoint: string) => apiClientVerse.getAll(endpoint),
  );

  const {
    data: { chapter } = {},
    isLoading: chapterIsLoading,
    error: chapterError,
  } = useSWR<SingleChapterResponse>(`/chapters/${id}`, (endpoint: string) =>
    apiClientChapter.getAll(endpoint),
  );

  return (
    <>
      {!chapterIsLoading && (
        <h1 className="text-5xl my-12" dir="rtl">
          سورة {chapter!.name_arabic}
        </h1>
      )}
      <div className="w-full flex flex-col gap-3">
        {!isLoading &&
          verses.map((verse) => <VerseItem key={verse.id} verse={verse} />)}
      </div>
    </>
  );
};

export default VerseList;
