import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockApiService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        id: 1,
        name: 'Jorge Mario Hurtado',
        company: 'Yuxi Global',
        age: 38,
        birthday: '1980/03/03',
        favorite_color: 'Red',
        project: 1,
      },
      {
        id: 2,
        name: 'Pablo Diaz',
        company: 'Yuxi Global',
        age: 39,
        birthday: '1979/12/24',
        favorite_color: 'Green',
        project: 1,
      },
      {
        id: 3,
        name: 'Roger Alvarez',
        company: 'Yuxi Global',
        age: 30,
        birthday: '1988/05/12',
        favorite_color: 'Green',
        project: 1,
      },
      {
        id: 4,
        name: 'Carlos Carrero',
        company: 'Yuxi Global',
        age: 38,
        birthday: '1980/10/19',
        favorite_color: 'Dark Grey',
        project: 2,
      },
      {
        id: 5,
        name: 'Santiago Arango',
        company: 'Yuxi Global',
        age: 26,
        birthday: '1992/11/27',
        favorite_color: 'Brown',
        project: 2,
      },
      {
        id: 6,
        name: 'Harvin Bejarano',
        company: 'Yuxi Global',
        age: 37,
        birthday: '1981/05/30',
        favorite_color: 'Black',
        project: 3,
      },
      {
        id: 7,
        name: 'Jorge Serrano',
        company: 'Yuxi Global',
        age: 44,
        birthday: '1974/10/09',
        favorite_color: 'Red',
        project: 3,
      },
      {
        id: 8,
        name: 'Rachel Quimby',
        company: 'Yuxi Global',
        age: 25,
        birthday: '1993/01/28',
        favorite_color: 'Pink',
        project: 6,
      },
    ];
    const projects = [
      {
        id: 1,
        name: 'TopGun',
        team_size: 3,
        client_name: 'Brainshark',
      },
      {
        id: 2,
        name: 'Rango',
        team_size: 2,
        client_name: 'Brainshark',
      },
      {
        id: 3,
        name: 'Tron',
        team_size: 2,
        client_name: 'Brainshark',
      },
      {
        id: 4,
        name: 'MadMax',
        team_size: 0,
        client_name: 'Brainshark',
      },
      {
        id: 5,
        name: 'Die Hard',
        team_size: 0,
        client_name: 'Brainshark',
      },
      {
        id: 6,
        name: 'Fury',
        team_size: 1,
        client_name: 'Brainshark',
      },
    ];
    return { employees, projects };
  }
}
