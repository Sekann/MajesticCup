import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {HeroInterface} from '../services/interfaces/hero-interface';
import {HeroWheelComponent} from '../hero-wheel/hero-wheel.component';
import {HeroComsService} from '../services/communication/hero-coms.service';

@Component({
  selector: 'app-draft',
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    HeroWheelComponent
  ],
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.scss'
})
export class DraftComponent implements OnInit {
  bannedHeroes: HeroInterface[] = [];
  firstBanned= new Array<HeroInterface>(5);
  secondBanned = new Array<HeroInterface>(5);
  heroWheel: boolean = false;
  selectedHerosTeam1: HeroInterface[] = new Array<HeroInterface>(4);
  selectedHeroesTeam2: HeroInterface[] = new Array<HeroInterface>(4);
  countFilled = (array: HeroInterface[]) => array.filter(item=>item != null).length

  constructor(private heroComs: HeroComsService) {
  }

  ngOnInit() {
    this.heroComs.heroComs$.subscribe(hero => {
      if (!hero) {
        hero = sessionStorage.getItem('currentHero') as unknown as HeroInterface;
      }
      if (this.countFilled(this.selectedHerosTeam1) == this.countFilled(this.selectedHeroesTeam2)) {
        this.selectedHerosTeam1.push(hero)
      } else {
        this.selectedHeroesTeam2.push(hero)
      }
    })
  }

  revealIndex = 0;

  getBannedHeroes() {
    this.banHeroes();
    this.firstBanned = [];
    this.secondBanned = [];
    this.revealIndex = 0;
    this.revealNextHero();
  }

  revealNextHero() {
    if (this.revealIndex < this.bannedHeroes.length) {
      const current = this.bannedHeroes[this.revealIndex];
      if (this.revealIndex < 5) {
        this.firstBanned.push(current);
      } else {
        this.secondBanned.push(current);
      }
      this.revealIndex++;
      setTimeout(() => this.revealNextHero(), 500);
    }
  }

  banHeroes() {
    this.bannedHeroes = [
    {slug: "ffdfdf",
      name:"Heroe1",
      image:"fdjfdfdjfdjf"},
      {slug: "ffdfdf",
        name:"Heroe2",
        image:"fdjfdfdjfdjf"},
      {slug: "ffdfdf",
        name:"Heroe3",
        image:"fdjfdfdjfdjf"},
      {slug: "ffdfdf",
        name:"Heroe4",
        image:"fdjfdfdjfdjf"},
      {slug: "ffdfdf",
        name:"Heroe5",
        image:"fdjfdfdjfdjf"},
      {slug: "ffdfdf",
        name:"Heroe6",
        image:"fdjfdfdjfdjf"},
      {slug: "ffdfdf",
        name:"Heroe7",
        image:"fdjfdfdjfdjf"},
      {slug: "ffdfdf",
        name:"Heroe8",
        image:"fdjfdfdjfdjf"},
      {slug: "ffdfdf",
        name:"Heroe9",
        image:"fdjfdfdjfdjf"},
      {slug: "ffdfdf",
        name:"Heroe10",
        image:"fdjfdfdjfdjf"},]

    for (let i = 0; i < 5; i++) {
      this.firstBanned[i] = this.bannedHeroes[i];
      this.secondBanned[i] = this.bannedHeroes[i+5];
    }
  }

  openWheel(): void {
    this.heroWheel = true;
  }

  closeWheel(): void {
    this.heroWheel = false;
  }

}
