export const FEMALE = 'F';
export const MALE = 'M';

export function buildMixedTeam(teamA, teamB = { players: [] }) {
  const allPlayers = teamA.players.concat(teamB.players).sort(byName);

  return {
    names: allPlayers.map(player => player.name).join(', '),
    players: allPlayers
  };
}

export function byAverage(playerA, playerB) {
  return playerA.average - playerB.average;
}

export function byScore(teamA, teamB) {
  return teamA.score - teamB.score;
}

export function byName(playerA, playerB) {
  return playerA.name.localeCompare(playerB.name);
}

export function calculateAverage(scores) {
  return calculateScore(scores) / scores.length;
}

export function calculateScore(scores) {
  return scores.reduce((prev, curr) => prev + curr, 0);
}

export function createEmptyTeam() {
  return {
    players: [],
    score: 0
  };
}

export function createPlayer(name, gender, scores) {
  return {
    average: calculateAverage(scores),
    gender,
    name
  };
}

export function draw([team1, team2], fieldOptions) {
  const template = document.getElementById('template');
  const newTemplate = template.cloneNode(true).content;

  newTemplate.getElementById(`${team1.teamClassSelector}-name`).innerText = team1.teamName;
  newTemplate.getElementById(`${team2.teamClassSelector}-name`).innerText = team2.teamName;

  team1.players.forEach((player, index, list) => {
    const i = list.length === 5 ? index + 2 : index + 1;

    newTemplate.getElementById(`${team1.teamClassSelector}-player${i}`).innerText = player.name;
    newTemplate
      .getElementById(`${team1.teamClassSelector}-player${i}`)
      .classList.add(team1.teamColor);
  });

  team2.players.forEach((player, index, list) => {
    const i = list.length === 5 ? index + 2 : index + 1;

    newTemplate.getElementById(`${team2.teamClassSelector}-player${i}`).innerText = player.name;
    newTemplate
      .getElementById(`${team2.teamClassSelector}-player${i}`)
      .classList.add(team2.teamColor);
  });

  newTemplate.getElementById('field-id').id = fieldOptions.fieldId;
  newTemplate.getElementById('download').setAttribute('data-field-id', fieldOptions.fieldId);

  document.body.appendChild(newTemplate);
}

export function getTeam(...teams) {
  const [lowestScoreTeam] = [...teams].sort(byScore);

  return lowestScoreTeam;
}

export function getFieldConfig(fieldId) {
  return {
    fieldId
  };
}

export function getTeamConfig(team, teamClassSelector, teamColor, teamName) {
  return {
    names: team.names,
    players: team.players,
    teamClassSelector,
    teamColor,
    teamName
  };
}

export function showInConsole(...teams) {
  const message = teams.map(team => `\n- ${team.teamName}: ${team.names}`).join('');

  console.log(`\nEquipos: \n${message}\n\n`);
}

export function updateAverage(team) {
  return {
    ...team,
    score: team.players.length ? calculateScore(team.players.map(player => player.average)) : 0
  };
}
