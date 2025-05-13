import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Team } from '../services/interfaces/team';
import { Router } from '@angular/router';
import { TeamService } from '../services/team/team.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  teams: Team[] = [];

  constructor(private router: Router, private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams ?? []; 
    });
  }

  goToTeamInfo(slug: string) {
    this.router.navigate(['/equipo', slug]);
  }
}
