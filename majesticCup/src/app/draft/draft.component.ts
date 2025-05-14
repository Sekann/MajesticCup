import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {HeroInterface} from '../services/interfaces/hero-interface';
import {HeroWheelComponent} from '../hero-wheel/hero-wheel.component';
import {HeroComsService} from '../services/communication/hero-coms.service';
import {BanningWheelService} from '../services/draft/banning-wheel.service';
import {Banning} from '../services/interfaces/banning';
import {enviroment} from '../../enviroment/enviroment';
import {Team} from '../services/interfaces/team';


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
export class DraftComponent {
  bannedHeroes: HeroInterface[] = [];
  firstBanned= new Array<HeroInterface>(5);
  secondBanned = new Array<HeroInterface>(5);
  heroWheel: boolean = false;
  selectedHerosTeam1: HeroInterface[] = [];
  selectedHerosTeam2: HeroInterface[] = [];
  remainingHeros: HeroInterface[] = [];
  firstToSelect: Team|null = null;

  constructor(private heroComs: HeroComsService, private banningService: BanningWheelService) {
  }


  revealIndex = 0;



  async getBannedHeroes() {
    await this.banHeroes();
    this.firstBanned = [];
    this.secondBanned = [];
    this.revealIndex = 0;

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
    this.banningService.banHeros("QQf_AnpR2sVlPAsMNUWKZQ").subscribe({
      next: (data: Banning) => {
        console.log(data);
        this.bannedHeroes = data.personajes_baneados as HeroInterface[];
        this.remainingHeros = data.personajes_restantes as HeroInterface[];
        this.firstToSelect = data.primer_equipo_elegir;
        this.revealNextHero();
      },
      error: (err: any) => {
        console.log(err);
      }
    })

  }

  openWheel(): void {
    this.heroComs.changeRemainingHeroes(this.remainingHeros);
    this.heroWheel = true;
  }

  closeWheel(): void {
    this.heroWheel = false;
  }


  onCloseWheel(hero:HeroInterface): void {
    this.heroComs.changeHero(hero);
    this.heroWheel = false;
    if (this.selectedHerosTeam1.length == this.selectedHerosTeam2.length) {
      this.selectedHerosTeam1.push(hero)
    } else {
      this.selectedHerosTeam2.push(hero)
    }
  }

  protected readonly enviroment = enviroment;
}
