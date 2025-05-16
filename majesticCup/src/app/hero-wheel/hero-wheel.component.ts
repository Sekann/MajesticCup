import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForOf, NgClass, NgIf} from '@angular/common';
import {HeroInterface} from '../services/interfaces/hero-interface';
import {HeroComsService} from '../services/communication/hero-coms.service';
import {enviroment} from '../../enviroment/enviroment';

@Component({
  selector: 'app-hero-wheel',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './hero-wheel.component.html',
  styleUrl: './hero-wheel.component.scss'
})
export class HeroWheelComponent implements OnInit {
  heroArray: HeroInterface[] = [];
  currentIndex: number = -1;
  selectedIndex: number = -1;
  isSelecting: boolean = false;

  @Output() close = new EventEmitter<HeroInterface>();

  constructor(private heroComs: HeroComsService) {
  }

  ngOnInit() {
    this.heroComs.remainingHeroes$.subscribe((heroes) => {
      this.heroArray = heroes;
    })

  }

  startSelection() {
    if (this.isSelecting) return;

    this.isSelecting = true;
    this.selectedIndex = -1;
    let cycles = 0;
    const totalCycles = 2;
    const finalIndex = Math.floor(Math.random() * this.heroArray.length);
    const baseDelay = 175;

    const animate = () => {
      this.currentIndex = (this.currentIndex + 1) % this.heroArray.length;
      if (this.currentIndex === 0) {
        cycles++;
      }
      let delay;
      const cycleProgress = this.currentIndex / this.heroArray.length;

      if (cycles === 0) {
        delay = baseDelay;
      } else if (cycles === 1) {
        delay = baseDelay - 50;
      } else {
        delay = baseDelay + (cycleProgress * 500);
      }

      if (cycles < totalCycles || (cycles === totalCycles && this.currentIndex !== finalIndex)) {
        setTimeout(animate, delay);
      } else {
          this.selectedIndex = finalIndex;
          setTimeout(() => {
            this.close.emit(this.heroArray[finalIndex]);
            this.isSelecting = false;
            this.heroArray.splice(finalIndex, 1);
            this.heroComs.changeRemainingHeroes(this.heroArray);
          }, 1000);
      }
    };
    animate();
  }

  protected readonly enviroment = enviroment;
}
