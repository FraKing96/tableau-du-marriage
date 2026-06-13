export type Guest = {
  name: string;
};

export type Table = {
  id: number;
  name: string;
  guests: Guest[];
};

export const weddingInfo = {
  couple: "Nicole & Francesco",
  date: "14 Giugno 2026",
  venue: "Villa delle Rose",
  subtitle: "Tableau du Mariage",
};

export const tables: Table[] = [
  {
    id: 1,
    name: "Tavolo degli Sposi",
    guests: [
      { name: "Nicole" },
      { name: "Francesco" },
      { name: "Testimone Nicole" },
      { name: "Testimone Francesco" },
    ],
  },
  {
    id: 2,
    name: "Famiglia Palmeri",
    guests: [
      { name: "Mario Palmeri" },
      { name: "Laura Palmeri" },
      { name: "Giulia Palmeri" },
      { name: "Marco Palmeri" },
      { name: "Sofia Palmeri" },
      { name: "Luca Palmeri" },
    ],
  },
  {
    id: 3,
    name: "Famiglia Nicole",
    guests: [
      { name: "Roberto" },
      { name: "Elena" },
      { name: "Andrea" },
      { name: "Chiara" },
      { name: "Valentina" },
      { name: "Davide" },
    ],
  },
  {
    id: 4,
    name: "Amici del Liceo",
    guests: [
      { name: "Alessandro" },
      { name: "Beatrice" },
      { name: "Federico" },
      { name: "Martina" },
      { name: "Simone" },
      { name: "Elisa" },
      { name: "Tommaso" },
      { name: "Francesca" },
    ],
  },
  {
    id: 5,
    name: "Amici dell'Università",
    guests: [
      { name: "Matteo" },
      { name: "Giorgia" },
      { name: "Riccardo" },
      { name: "Sara" },
      { name: "Paolo" },
      { name: "Alice" },
    ],
  },
  {
    id: 6,
    name: "Colleghi",
    guests: [
      { name: "Stefano" },
      { name: "Monica" },
      { name: "Gabriele" },
      { name: "Patrizia" },
      { name: "Enrico" },
      { name: "Silvia" },
    ],
  },
  {
    id: 7,
    name: "Zii & Cugini",
    guests: [
      { name: "Antonio" },
      { name: "Rosa" },
      { name: "Giuseppe" },
      { name: "Anna" },
      { name: "Vincenzo" },
      { name: "Maria" },
      { name: "Salvatore" },
      { name: "Teresa" },
    ],
  },
  {
    id: 8,
    name: "Amici di Nicole",
    guests: [
      { name: "Camilla" },
      { name: "Lorenzo" },
      { name: "Noemi" },
      { name: "Daniele" },
      { name: "Ilaria" },
      { name: "Pietro" },
    ],
  },
];
