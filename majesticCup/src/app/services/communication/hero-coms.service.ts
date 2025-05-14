import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HeroInterface} from '../interfaces/hero-interface';

@Injectable({
  providedIn: 'root'
})
export class HeroComsService {
  heroComs: BehaviorSubject<HeroInterface | null> = new BehaviorSubject<HeroInterface|null>(null);
  heroComs$ = this.heroComs.asObservable();
  remainingHeroes: BehaviorSubject<HeroInterface []> = new BehaviorSubject<HeroInterface[]>([]);
  remainingHeroes$ = this.remainingHeroes.asObservable();

  constructor() { }

  changeHero(hero: HeroInterface) {
    this.heroComs.next(hero);
    this.setCurrentHero(hero);
  }

  changeRemainingHeroes(heroes: HeroInterface[]) {
    this.remainingHeroes.next(heroes);
  }

  setCurrentRemainingHeroes(heroes: HeroInterface[]) {
    sessionStorage.setItem('remainingHeroes', JSON.stringify(heroes));
  }

  setCurrentHero(hero: HeroInterface) {
    sessionStorage.setItem('currentHero', JSON.stringify(hero));
  }


}
