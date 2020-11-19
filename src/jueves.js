import {
  buildMixedTeam,
  byAverage,
  createEmptyTeam,
  createPlayer,
  draw,
  getFieldConfig,
  getTeam,
  getTeamConfig,
  MALE,

  showInConsole, updateAverage
} from './auxiliar';

const players = [
  createPlayer('Cris', MALE, [9]),
  createPlayer('Tavo', MALE, [7]),
  createPlayer('Facu', MALE, [4]),
  createPlayer('Roque', MALE, [5]),
  createPlayer('Ale', MALE, [4]),
  createPlayer('Mati', MALE, [8]),
  createPlayer('Nico', MALE, [5]),
  createPlayer('Pato', MALE, [6]),
  createPlayer('Victor', MALE, [5]),
  createPlayer('Max', MALE, [8])
].sort(byAverage);

let teamM1 = createEmptyTeam();
let teamM2 = createEmptyTeam();

for (let index = 0; index < players.length; index++) {
  const player = players[index];

  teamM1 = updateAverage(teamM1);
  teamM2 = updateAverage(teamM2);

  const team = getTeam(teamM1, teamM2);

  team.players.push(player);
}

const sortedTeam1 = buildMixedTeam(teamM1);
const sortedTeam2 = buildMixedTeam(teamM2);

const team1 = getTeamConfig(sortedTeam1, 'team1', 'bees', 'Abejas 🐝');
const team2 = getTeamConfig(sortedTeam2, 'team2', 'vuejs', 'Vue.js 👨🏻‍💻');

draw([team1, team2], getFieldConfig('field-1'));

showInConsole(team1, team2);
