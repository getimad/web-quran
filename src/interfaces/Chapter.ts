interface Chapter {
  id: number;
  revelation_place: string;
  name_simple: string;
  name_arabic: string;
  verses_count: number;
}

export default Chapter;

// Example usage:

// {
//   "chapters": [
//     {
//       "id": 1,
//       "revelation_place": "makkah",
//       "revelation_order": 5,
//       "bismillah_pre": false,
//       "name_simple": "Al-Fatihah",
//       "name_complex": "Al-Fātiĥah",
//       "name_arabic": "الفاتحة",
//       "verses_count": 7,
//       "pages": [
//         1,
//         1
//       ],
//       "translated_name": {
//         "language_name": "english",
//         "name": "The Opener"
//       }
//     }
//   ]
// }
