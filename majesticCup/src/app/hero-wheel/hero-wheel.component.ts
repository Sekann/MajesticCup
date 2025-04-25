import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-hero-wheel',
  imports: [
    NgForOf
  ],
  templateUrl: './hero-wheel.component.html',
  styleUrl: './hero-wheel.component.scss'
})
export class HeroWheelComponent {
  sections = new Array(28);
  anglePerSection = 360 / this.sections.length;
  currentRotation = 0;

  spinRoulette() {
    const extraSpins = 5 * 360;
    const randomIndex = Math.floor(Math.random() * this.sections.length);
    const finalAngle = randomIndex * this.anglePerSection;

    this.currentRotation += extraSpins + finalAngle;

    setTimeout(() => {
      const selected = randomIndex;
      console.log('¡Ganador:', selected, '!');
    }, 4000);
  }

}
