import {
  buildMixedTeam,
  byAverage,
  createEmptyTeam,
  createPlayer,
  draw,
  getFieldConfig,

  getTeamConfig,
  MALE,

  showInConsole
} from './auxiliar';

const players = [
  /* Amarillo */
  createPlayer('1', MALE, [5]),
  createPlayer('2', MALE, [5]),
  createPlayer('3', MALE, [5]),
  createPlayer('4', MALE, [5]),
  createPlayer('5', MALE, [5]),
  createPlayer('6', MALE, [5]),

  /* Verde */
  createPlayer('7', MALE, [5]),
  createPlayer('8', MALE, [5]),
  createPlayer('9', MALE, [5]),
  createPlayer('10', MALE, [5]),
  createPlayer('11', MALE, [5]),
  createPlayer('12', MALE, [5]),
].sort(byAverage);

let teamM1 = createEmptyTeam();
let teamM2 = createEmptyTeam();

for (let index = 0; index < players.length; index++) {
  const player = players[index];

  if (index < (players.length / 2)) {
    teamM1.players.push(player);
  } else {
    teamM2.players.push(player);
  }
}

const sortedTeam1 = buildMixedTeam(teamM1);
const sortedTeam2 = buildMixedTeam(teamM2);

const team1 = getTeamConfig(sortedTeam1, 'team1', 'bees', 'Equipo 1');
const team2 = getTeamConfig(sortedTeam2, 'team2', 'vuejs', 'Equipo 2');

draw([team1, team2], getFieldConfig('field-1'));

showInConsole(team1, team2);
