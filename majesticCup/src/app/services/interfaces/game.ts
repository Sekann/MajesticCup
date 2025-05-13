import {Team} from './team';

export interface Game {
  slug: string;
  fecha: Date;
  equipo1: Team;
  equipo2: Team;
  ganador: string;
  created_at: Date; 
  updated_at: Date;
}
