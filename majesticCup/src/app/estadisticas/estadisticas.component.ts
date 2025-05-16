import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Team } from '../services/interfaces/team';
import { Router } from '@angular/router';
import { TeamService } from '../services/team/team.service';
import { Game } from '../services/interfaces/game';
import { enviroment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.scss'
})
export class EstadisticasComponent implements OnInit {
  teams: Team[] = [];
  games: Game[] = [];
  visibleGames: Game[] = [];
  gamesToShow = 4;
  showingAll = false;

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.loadTeams();
    this.teamService.loadGames();
    this.teamService.teams$.subscribe((teams) => {
      this.teams = teams.sort((a, b) => b.victorias - a.victorias);
    });

    this.teamService.games$.subscribe((games) => {
      this.games = games.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
      this.visibleGames = this.games.slice(0, this.gamesToShow);
    });
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
  getCleanImageUrl(imageUrl: string): string {
  return imageUrl.replace(/_[a-zA-Z0-9]+(?=\.)/, '');
}
getWinningTeamImage(game: any): string {
  //buscar el equipo cuyo nombre coincide con game.ganador
  const winningTeam = game.ganador === game.equipo1.nombre ? game.equipo1
                    : game.ganador === game.equipo2.nombre ? game.equipo2
                    : null;

  return winningTeam?.imagen
    ? enviroment.imageUrl + this.getCleanImageUrl(winningTeam.imagen)
    : '/images/image.png';
}
  protected readonly enviroment = enviroment;


}
