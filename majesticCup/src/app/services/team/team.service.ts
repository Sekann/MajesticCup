import { Injectable } from '@angular/core';
import { Team } from '../interfaces/team';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private games: Game[] = [
    {
      slug: 'game-1',
      team1: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      team2: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      date: new Date(),
      bans: [],
      usedHeroes: [],
      first_team_to_throw: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
    },
    {
      slug: 'game-2',
      team1: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      team2: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      date: new Date(),
      bans: [],
      usedHeroes: [],
      first_team_to_throw: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
    },
    {
      slug: 'game-1',
      team1: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      team2: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      date: new Date(),
      bans: [],
      usedHeroes: [],
      first_team_to_throw: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
    },
    {
      slug: 'game-2',
      team1: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      team2: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      date: new Date(),
      bans: [],
      usedHeroes: [],
      first_team_to_throw: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
    },
    {
      slug: 'game-1',
      team1: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      team2: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      date: new Date(),
      bans: [],
      usedHeroes: [],
      first_team_to_throw: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
    },
    {
      slug: 'game-2',
      team1: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      team2: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
      date: new Date(),
      bans: [],
      usedHeroes: [],
      first_team_to_throw: {
        slug: 'equipo-elmillor',
        name: 'Equipo Elmillor',
        victories: 86,
        losses: 42,
        winrate: 67,
        players: []
      },
    }
  ];
  private teams: Team[] = [
    {
      slug: 'equipo-elmillor',
      name: 'Equipo Elmillor',
      victories: 86,
      losses: 42,
      winrate: 67,
      players: [
        {
          nickname: 'Elmillor',
          name: 'VIPI ElmiilloR',
          imageUrl: 'images/image.png',
          twitchUrl: 'https://www.twitch.tv/elmiillor',
          victories: 86,
          losses: 42,
          winrate: 67,
          kickUrl: 'https://www.kick.com/elmiillor',
          twitterUrl: 'https://x.com/Elmiillor',
          opggUrl: 'https://www.op.gg/summoners/euw/VIPI%20ElmiilloR-CATHY'
        },
        {
          nickname: 'Xico',
          name: 'Mid Genius',
          imageUrl: 'images/image.png',
          victories: 64,
          losses: 38,
          winrate: 63,
          twitterUrl: 'https://x.com/XicoMid',
          opggUrl: 'https://www.op.gg/summoners/euw/Xico'
        },
        {
          nickname: 'Skain',
          name: 'The Coach',
          imageUrl: 'images/image.png',
          twitchUrl: 'https://www.twitch.tv/skain',
          victories: 50,
          losses: 45,
          winrate: 53,
          twitterUrl: 'https://x.com/SkainLoL',
          opggUrl: 'https://www.op.gg/summoners/euw/Skain'
        }
      ]
    },
    {
      slug: 'equipo-nissaxter',
      name: 'Equipo Nissaxter',
      victories: 75,
      losses: 48,
      winrate: 61,
      players: [
        {
          nickname: 'Nissaxter',
          name: 'Nissaxter Queen',
          imageUrl: '/images/image.png',
          victories: 75,
          losses: 48,
          winrate: 61,
          kickUrl: 'https://kick.com/nissaxter',
          twitterUrl: 'https://x.com/nissaxter',
          opggUrl: 'https://www.op.gg/summoners/euw/Nissaxter'
        },
        {
          nickname: 'Mihnea',
          name: 'ADC Beast',
          imageUrl: 'images/image.png',
          twitchUrl: 'https://www.twitch.tv/mihnea',
          victories: 60,
          losses: 40,
          winrate: 60,
          kickUrl: 'https://kick.com/mihnea',
          twitterUrl: 'https://x.com/MihneaADC',
          opggUrl: 'https://www.op.gg/summoners/euw/Mihnea'
        },
        {
          nickname: 'BarbeQ',
          name: 'Topliner',
          imageUrl: 'images/image.png',
          victories: 62,
          losses: 43,
          winrate: 59,
          twitterUrl: 'https://x.com/BarbeQLoL',
          opggUrl: 'https://www.op.gg/summoners/euw/BarbeQ'
        }
      ]
    }
  ];

  getTeams(): Team[] {
    return this.teams;
  }

  getGames(): Game[] {
    return this.games;
  }

  getTeamBySlug(slug: string): Team | undefined {
    return this.teams.find(team => team.slug === slug);
  }
}
