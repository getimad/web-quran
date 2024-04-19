import useSWR from "swr";
import { SingleChapterResponse } from "../interfaces";
import APIClient from "../services/api-client";
import { FC } from "react";

const apiClientChapter = new APIClient<SingleChapterResponse>();

type Props = {
  id: string;
};

const VerseTitle: FC<Props> = ({ id }) => {
  const { data: { chapter } = {}, isLoading: chapterIsLoading } =
    useSWR<SingleChapterResponse>(`/chapters/${id}`, (endpoint: string) =>
      apiClientChapter.getAll(endpoint),
    );

  return (
    !chapterIsLoading && (
      <h1 className="text-5xl" dir="rtl">
        سورة {chapter!.name_arabic}
      </h1>
    )
  );
};

export default VerseTitle;
