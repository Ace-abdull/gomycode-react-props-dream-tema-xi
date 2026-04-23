import vanDerSar from "@/assets/players/van_der_sar.jpg";
import maldini from "@/assets/players/maldini.jpg";
import cannavaro from "@/assets/players/cannavaro.jpg";
import robertoCarlos from "@/assets/players/roberto_carlos.jpg";
import marcelo from "@/assets/players/marcelo.jpg";
import royKeane from "@/assets/players/roy_keane.jpg";
import kaka from "@/assets/players/kaka.jpg";
import ozil from "@/assets/players/ozil.webp";
import messi from "@/assets/players/messi.jpg";
import cr7 from "@/assets/players/cr7.jpg";
import neymar from "@/assets/players/neymar.jpg";
import mourinho from "@/assets/players/mourinho.jpg";

export interface Player {
  name: string;
  rating: number;
  position: string;
  nation: string;
  club: string;
  image: string;
  stats: {
    pace: number;
    shooting: number;
    dribbling: number;
  };
}

export const goalkeeper: Player = {
  name: "Van der Sar",
  rating: 89,
  position: "GK",
  nation: "NED",
  club: "MUN",
  image: vanDerSar,
  stats: { pace: 85, shooting: 72, dribbling: 78 },
};

export const defenders: Player[] = [
  {
    name: "R. Carlos",
    rating: 91,
    position: "LB",
    nation: "BRA",
    club: "RMA",
    image: robertoCarlos,
    stats: { pace: 93, shooting: 80, dribbling: 88 },
  },
  {
    name: "Maldini",
    rating: 94,
    position: "CB",
    nation: "ITA",
    club: "MIL",
    image: maldini,
    stats: { pace: 88, shooting: 74, dribbling: 82 },
  },
  {
    name: "Cannavaro",
    rating: 92,
    position: "CB",
    nation: "ITA",
    club: "RMA",
    image: cannavaro,
    stats: { pace: 86, shooting: 72, dribbling: 78 },
  },
  {
    name: "Marcelo",
    rating: 88,
    position: "RB",
    nation: "BRA",
    club: "RMA",
    image: marcelo,
    stats: { pace: 90, shooting: 78, dribbling: 89 },
  },
];

export const midfielders: Player[] = [
  {
    name: "Roy Keane",
    rating: 89,
    position: "CDM",
    nation: "IRL",
    club: "MUN",
    image: royKeane,
    stats: { pace: 82, shooting: 78, dribbling: 80 },
  },
  {
    name: "Kaká",
    rating: 93,
    position: "CAM",
    nation: "BRA",
    club: "MIL",
    image: kaka,
    stats: { pace: 91, shooting: 86, dribbling: 94 },
  },
  {
    name: "Özil",
    rating: 88,
    position: "CM",
    nation: "GER",
    club: "ARS",
    image: ozil,
    stats: { pace: 78, shooting: 82, dribbling: 90 },
  },
];

export const forwards: Player[] = [
  {
    name: "Neymar",
    rating: 91,
    position: "LW",
    nation: "BRA",
    club: "PSG",
    image: neymar,
    stats: { pace: 92, shooting: 84, dribbling: 96 },
  },
  {
    name: "Messi",
    rating: 95,
    position: "ST",
    nation: "ARG",
    club: "FCB",
    image: messi,
    stats: { pace: 88, shooting: 94, dribbling: 96 },
  },
  {
    name: "Ronaldo",
    rating: 94,
    position: "RW",
    nation: "POR",
    club: "RMA",
    image: cr7,
    stats: { pace: 93, shooting: 95, dribbling: 89 },
  },
];

export const manager = {
  name: "José Mourinho",
  image: mourinho,
};
