export type Tournament = {
  id: string;
  game: string;
  date: string;
  time: string;
  format: string;
  prize: string;
  status: "open" | "soon" | "closed";
  registrationUrl?: string;
};

export const tournaments: Tournament[] = [
  {
    id: "cs2-2026-11-03",
    game: "CS2",
    date: "3 ноября",
    time: "19:00",
    format: "5×5 · Single Elimination",
    prize: "15 000 ₽",
    status: "open",
    registrationUrl: "https://forms.yandex.ru/u/your-form-id",
  },
  {
    id: "dota2-2026-11-05",
    game: "Dota 2",
    date: "5 ноября",
    time: "19:00",
    format: "5×5 · Captains Mode",
    prize: "15 000 ₽",
    status: "open",
    registrationUrl: "https://forms.yandex.ru/u/your-form-id",
  },
  {
    id: "valorant-2026-11-07",
    game: "Valorant",
    date: "7 ноября",
    time: "18:00",
    format: "5×5 · Bo3 плей-офф",
    prize: "10 000 ₽",
    status: "soon",
  },
  {
    id: "apex-2026-11-08",
    game: "Apex Legends",
    date: "8 ноября",
    time: "17:00",
    format: "Trios · 3 матча",
    prize: "10 000 ₽",
    status: "open",
    registrationUrl: "https://forms.yandex.ru/u/your-form-id",
  },
];
