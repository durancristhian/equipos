import {
  byAverage,
  byName,
  createEmptyTeam,
  createPlayer,
  draw,
  FEMALE,
  getFieldConfig,
  getTeam,
  getTeamConfig,
  MALE,
  updateAverage,
  byScore,
  buildMixedTeam,
  showInConsole
} from './auxiliar';

const players = [
  createPlayer('Ana', FEMALE, [5, 5, 7]),
  createPlayer('Lu', FEMALE, [6, 7, 6]),
  createPlayer('Cami', FEMALE, [7, 3, 7, 6]),
  createPlayer('Romi', FEMALE, [7, 5, 4, 6]),
  createPlayer('Nucha', FEMALE, [6, 5, 6, 7]),
  createPlayer('Coco', FEMALE, [7, 6, 6]),
  createPlayer('Eli', FEMALE, [7, 8]),
  createPlayer('Marian', FEMALE, [6, 7, 7, 7]),
  createPlayer('Giani', FEMALE, [7, 8, 8]),
  createPlayer('Anabella', FEMALE, [8, 5, 6, 7]),
  createPlayer('Angie', FEMALE, [6, 5, 7, 8]),
  createPlayer('Có', FEMALE, [9, 8, 8, 9]),

  createPlayer('Cris', MALE, [8, 7, 9, 8]),
  createPlayer('Dan', MALE, [8, 7, 8, 8]),
  createPlayer('Fran', MALE, [6, 5, 6, 6]),
  createPlayer('Victor', MALE, [3, 4, 3, 5]),
  createPlayer('Fer', MALE, [5, 6, 7, 7]),
  createPlayer('Checho', MALE, [5, 7, 7]),
  createPlayer('Acero', MALE, [8, 8, 8, 7]),
  createPlayer('Chino', MALE, [7, 8, 8, 7]),
  createPlayer('Agustín', MALE, [6, 4, 5, 4]),
  createPlayer('Panta', MALE, [6]),
  createPlayer('Fede', MALE, [3, 4]),
  createPlayer('Nico', MALE, [6])
];

const playersF = players.filter(p => p.gender === FEMALE).sort(byAverage);
const playersM = players.filter(p => p.gender === MALE).sort(byAverage);

let team1F = createEmptyTeam();
let team2F = createEmptyTeam();
let team3F = createEmptyTeam();
let team4F = createEmptyTeam();
let team1M = createEmptyTeam();
let team2M = createEmptyTeam();
let team3M = createEmptyTeam();
let team4M = createEmptyTeam();

for (let index = 0; index < playersF.length; index++) {
  const playerF = playersF[index];
  const playerM = playersM[index];

  team1F = updateAverage(team1F);
  team2F = updateAverage(team2F);
  team3F = updateAverage(team3F);
  team4F = updateAverage(team4F);
  team1M = updateAverage(team1M);
  team2M = updateAverage(team2M);
  team3M = updateAverage(team3M);
  team4M = updateAverage(team4M);

  const teamF = getTeam(team1F, team2F, team3F, team4F);
  const teamM = getTeam(team1M, team2M, team3M, team4M);

  teamF.players.push(playerF);
  teamM.players.push(playerM);
}

const teamsF = [team1F, team2F, team3F, team4F].sort(byScore);
const teamsM = [team1M, team2M, team3M, team4M].sort(byScore);

const mixedTeam1 = buildMixedTeam(teamsF[0], teamsM[3]);
const mixedTeam2 = buildMixedTeam(teamsF[1], teamsM[2]);
const mixedTeam3 = buildMixedTeam(teamsF[2], teamsM[1]);
const mixedTeam4 = buildMixedTeam(teamsF[3], teamsM[0]);

const team1 = getTeamConfig(mixedTeam1, 'team1', 'blue', 'Ballenas 🐳');
const team2 = getTeamConfig(mixedTeam2, 'team2', 'orange', 'Tigres 🐯');
const team3 = getTeamConfig(mixedTeam3, 'team1', 'red', 'Cangrejos 🦀');
const team4 = getTeamConfig(mixedTeam4, 'team2', 'green', 'Sapos 🐸');

draw([team1, team2], getFieldConfig('field-1'));
draw([team3, team4], getFieldConfig('field-2'));

showInConsole(team1, team2, team3, team4);
