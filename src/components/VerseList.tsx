import { FC } from "react";
import { VerseResponse } from "../interfaces";
import useSWR from "swr";
import APIClient from "../services/api-client";
import VerseItem from "./VerseItem";

type Props = {
  id: string;
};

const apiClientVerse = new APIClient<VerseResponse>();

const VerseList: FC<Props> = ({ id }) => {
  const { data: { verses = [] } = {}, isLoading: verseIsLoading } =
    useSWR<VerseResponse>(
      `/quran/verses/imlaei?chapter_number=${id}`,
      (endpoint: string) => apiClientVerse.getAll(endpoint),
    );

  return (
    <div className="w-full flex flex-col gap-3">
      {!verseIsLoading &&
        verses.map((verse) => <VerseItem key={verse.id} verse={verse} />)}
    </div>
  );
};

export default VerseList;
