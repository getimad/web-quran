import { FC } from "react";
import "../styles/VerseInfoText.css";
import useSWR from "swr";
import { VerseInfoResponse } from "../interfaces";
import APIClient from "../services/api-client";

type Props = {
  id: string;
};

const apiClient = new APIClient<VerseInfoResponse>();

const VerseInfoText: FC<Props> = ({ id }) => {
  const {
    data: { chapter_info } = {},
    isLoading,
    error,
  } = useSWR<VerseInfoResponse>(`chapters/${id}/info`, (endpoint: string) =>
    apiClient.getAll(endpoint),
  );

  return (
    !isLoading && (
      <>
        <h2 className="w-full flex justify-between bg-orange-50 p-2 rounded-md text-orange-800">
          <h2>Source:</h2>
          <p>{chapter_info?.source}</p>
        </h2>
        <article
          className="info-style bg-orange-50 p-3 rounded-md"
          dangerouslySetInnerHTML={{ __html: chapter_info!.text }}
        ></article>
      </>
    )
  );
};

export default VerseInfoText;
