import Ayah from "./Ayah";

interface Surah {
  number: number;
  name: string;
  englishName: string;
  // revelationType: string;
  numberOfAyahs: number;
  ayahs: Ayah[];
}

export default Surah;
