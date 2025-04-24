import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {HeroInterface} from '../services/interfaces/hero-interface';

@Component({
  selector: 'app-draft',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.scss'
})
export class DraftComponent {
  bannedHeroes: HeroInterface[] = [];
  firstBanned= new Array<HeroInterface>(5);
  secondBanned = new Array<HeroInterface>(5);


  getBannedHeroes() {
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
        image:"fdjfdfdjfdjf"},

    ]

    for (let i = 0; i < 5; i++) {
      this.firstBanned[i] = this.bannedHeroes[i];
      this.secondBanned[i] = this.bannedHeroes[i+5];
    }

    console.log(this.bannedHeroes);
    console.log(this.firstBanned);
    console.log(this.secondBanned);

  }
}
