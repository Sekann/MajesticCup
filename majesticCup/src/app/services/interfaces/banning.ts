import {Team} from './team';
import {HeroInterface} from './hero-interface';

export interface Banning {
  primer_equipo_elegir: Team;
  personajes_baneados: HeroInterface[];
  personajes_restantes: HeroInterface[];

}
