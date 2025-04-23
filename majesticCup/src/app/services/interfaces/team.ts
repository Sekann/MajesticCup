import { Player } from "./player";

export interface Team {
  slug: string;
  name: string;
  victories: number;
  losses: number;
  winrate: number;
  players: Player[];
}
