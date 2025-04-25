import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForOf} from '@angular/common';
import {HeroInterface} from '../services/interfaces/hero-interface';

@Component({
  selector: 'app-hero-wheel',
  imports: [
    NgForOf
  ],
  templateUrl: './hero-wheel.component.html',
  styleUrl: './hero-wheel.component.scss'
})
export class HeroWheelComponent implements OnInit{
  sections = new Array(28);
  heroArray: HeroInterface[] = new Array(28);
  anglePerSection = 360 / this.sections.length;
  currentRotation = 0;
  @Output() close = new EventEmitter<HeroInterface>();


  constructor() {
  }


  ngOnInit() {
    this.fillUpHeroArray();
  }

  spinRoulette() {
    const extraSpins = 5 * 360;
    const randomIndex = Math.floor(Math.random() * this.sections.length);
    const finalAngle = randomIndex * this.anglePerSection;

    this.currentRotation += extraSpins + finalAngle;

    setTimeout(() => {
      this.close.emit(this.heroArray[randomIndex]);
    }, 4000);




  }

  fillUpHeroArray() {
    for (let i = 0; i < this.sections.length; i++) {
      this.heroArray[i] = {
        slug: "ffdfdf",
        name:"Heroe" + (i + 1),
        image:"fdjfdfdjfdjf"
      };
    }
  }

}
