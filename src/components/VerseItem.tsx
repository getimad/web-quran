import { FC } from "react";
import { Verse } from "../interfaces";

type Props = {
  verse: Verse;
};

const VerseItem: FC<Props> = ({ verse }) => {
  return (
    <div className="bg-orange-50 p-3 rounded-md">
      <p className="font-bold text-xl" key={verse.id} dir="rtl">
        {verse.text_imlaei}
        <span className="h-8 w-8 mr-2 inline-flex items-center justify-center bg-orange-200 rounded-full text-sm text-orange-800">
          {verse.verse_key.split(":")[1]}
        </span>
      </p>
    </div>
  );
};

export default VerseItem;
