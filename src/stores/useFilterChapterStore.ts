import { create } from "zustand";

type FilterStore = {
  searchQuery: string;
  isAscending: boolean;
  setSearchQuery: (searchQuery: string) => void;
  setIsAscending: (isAscending: boolean) => void;
};

const useFilterChapterStore = create<FilterStore>((set) => ({
  searchQuery: "",
  isAscending: true,
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
  setIsAscending: (isAscending: boolean) => set({ isAscending }),
}));

export default useFilterChapterStore;
