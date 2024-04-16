import Chapter from "./Chapter";

interface SingleChapterResponse {
  chapter: Chapter;
}

interface MultipleChaptersResponse {
  chapters: Chapter[];
}

export type { SingleChapterResponse, MultipleChaptersResponse };
