import { FC } from "react";
import { Chapter, SingleChapterResponse } from "../interfaces";
import APIClient from "../services/api-client";
import useSWR from "swr";

type Props = {
  id: string;
};

const apiClient = new APIClient<SingleChapterResponse>();

const VerseInfoList: FC<Props> = ({ id }) => {
  const {
    data: { chapter } = { chapter: {} as Chapter },
    isLoading,
    error,
  } = useSWR<SingleChapterResponse>(`chapters/${id}`, (endpoint: string) =>
    apiClient.getAll(endpoint),
  );

  const keyValuePairs = [
    { key: "Revelation Place", value: chapter.revelation_place },
    { key: "Verses Count", value: chapter.verses_count },
  ];

  return (
    !isLoading && (
      <article className="flex flex-wrap gap-3">
        {keyValuePairs.map((pair, index) => (
          <div
            key={index}
            className="flex gap-24 justify-between bg-orange-50 p-2 rounded-md text-orange-800"
          >
            <h2>{pair.key}:</h2>
            <p>{pair.value}</p>
          </div>
        ))}
      </article>
    )
  );
};

export default VerseInfoList;
