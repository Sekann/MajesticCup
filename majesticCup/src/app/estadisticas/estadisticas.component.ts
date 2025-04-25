import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Team } from '../services/interfaces/team';
import { Router } from '@angular/router';
import { TeamService } from '../services/team/team.service';
import { Game } from '../services/interfaces/game';
@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.scss'
})
export class EstadisticasComponent {
  teams: Team[] = [];
  games: Game[] = [];
  visibleGames: Game[] = [];
  gamesToShow = 4;
  showingAll = false;

  constructor(private router: Router, private teamService: TeamService) {
    this.teams = this.teamService.getTeams();
    this.games = this.teamService.getGames();
    this.visibleGames = this.games.slice(0, this.gamesToShow);
  }

  goToTeamInfo(slug: string) {
    this.router.navigate(['/equipo', slug]);
  }
  showMoreGames() {
    if (!this.showingAll) {
      this.visibleGames = this.games;
    } else {
      this.visibleGames = this.games.slice(0, this.gamesToShow);
    }
    this.showingAll = !this.showingAll;
  }
}
