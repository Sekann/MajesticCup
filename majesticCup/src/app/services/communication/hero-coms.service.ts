import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HeroInterface} from '../interfaces/hero-interface';

@Injectable({
  providedIn: 'root'
})
export class HeroComsService {
  heroComs: BehaviorSubject<HeroInterface | null> = new BehaviorSubject<HeroInterface|null>(null);
  heroComs$ = this.heroComs.asObservable();

  constructor() { }

  changeHero(hero: HeroInterface) {
    this.heroComs.next(hero);
    this.setCurrentHero(hero);
  }

  setCurrentHero(hero: HeroInterface) {
    sessionStorage.setItem('currentHero', JSON.stringify(hero));
  }


}
