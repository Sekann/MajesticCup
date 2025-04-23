import {Team} from './team';
import {HeroInterface} from './hero-interface';

export interface Game {
  slug: string;
  team1: Team;
  team2: Team;
  date: Date;
  bans: HeroInterface[];
  usedHeroes: HeroInterface[];
  first_team_to_throw: Team;
}
