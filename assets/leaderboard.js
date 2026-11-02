// National leaderboards. To update: edit the lists below (any order, they're
// sorted by points, and equal points share the same rank) and change the notes.
const BOARDS = {
  ks1: {
    note: 'Primary Golf Experience 2027 · KS1 Hole-in-One Challenge. Schools with no KS1 score recorded are not ranked.',
    schools: [
      { school: 'Baldwin’s Gate Primary', area: 'Staffordshire', points: 43 },
      { school: 'Ursuline Catholic Primary', area: 'Merseyside', points: 38 },
      { school: 'Matchborough First School', area: 'Worcestershire', points: 33 },
      { school: 'St Michael’s Catholic Primary Academy', area: 'Wolverhampton', points: 29 },
      { school: 'Sunnyfields Primary', area: 'South Yorkshire', points: 29 },
      { school: 'St Mary’s RC Primary', area: 'Lancashire', points: 28 },
      { school: 'St Alban’s Catholic Primary', area: 'Cheshire', points: 21 },
      { school: 'Binbrook C of E Primary', area: 'Lincolnshire', points: 19 },
      { school: 'Middle Barton Primary', area: 'Oxfordshire', points: 18 },
      { school: 'Wharncliffe Side Primary', area: 'South Yorkshire', points: 15 },
      { school: 'Derwent Vale Primary', area: 'Cumbria', points: 14 },
      { school: 'Salterforth Primary School', area: 'Lancashire', points: 13 },
      { school: 'Ash Green Upper', area: 'West Yorkshire', points: 12 },
      { school: 'North Clifton Primary', area: 'Nottinghamshire', points: 10 },
      { school: 'Uffington C of E', area: 'Lincolnshire', points: 10 },
      { school: 'Ash Green Lower', area: 'West Yorkshire', points: 8 },
    ],
  },
  ks2: {
    note: 'Primary Golf Experience 2027 · KS2 Hole-in-One Challenge.',
    schools: [
      { school: 'St Mary’s RC Primary', area: 'Lancashire', points: 16 },
      { school: 'Salterforth Primary School', area: 'Lancashire', points: 15 },
      { school: 'Ursuline Catholic Primary', area: 'Merseyside', points: 15 },
      { school: 'Baldwin’s Gate Primary', area: 'Staffordshire', points: 11 },
      { school: 'St Alban’s Catholic Primary', area: 'Cheshire', points: 10 },
      { school: 'Uffington C of E', area: 'Lincolnshire', points: 7 },
      { school: 'Mab Lane Primary', area: 'Merseyside', points: 6 },
      { school: 'Middle Barton Primary', area: 'Oxfordshire', points: 6 },
      { school: 'Ash Green Lower', area: 'West Yorkshire', points: 5 },
      { school: 'New York Primary', area: 'Tyne and Wear', points: 5 },
      { school: 'Sunnyfields Primary', area: 'South Yorkshire', points: 5 },
      { school: 'Derwent Vale Primary', area: 'Cumbria', points: 4 },
      { school: 'Matchborough First School', area: 'Worcestershire', points: 4 },
      { school: 'North Clifton Primary', area: 'Nottinghamshire', points: 4 },
      { school: 'Ash Green Upper', area: 'West Yorkshire', points: 3 },
      { school: 'Binbrook C of E Primary', area: 'Lincolnshire', points: 3 },
      { school: 'Wharncliffe Side Primary', area: 'South Yorkshire', points: 3 },
      { school: 'St Michael’s Catholic Primary Academy', area: 'Wolverhampton', points: 1 },
    ],
  },
  secondary: {
    note: 'First Swing launches in 2027. Could your school be the first name on the board?',
    schools: [],
  },
};

function render(id) {
  const board = BOARDS[id];
  const sorted = [...board.schools].sort((a, b) => b.points - a.points);
  const rows = sorted
    .map((s, i) => {
      const rank = sorted.findIndex((t) => t.points === s.points) + 1;
      return `<tr data-rank="${rank}">
        <td><span class="rank">${rank}</span></td>
        <td><span class="school">${s.school}</span><span class="area">${s.area}</span></td>
        <td><span class="pts">${s.points}</span> pts</td>
      </tr>`;
    })
    .join('');
  return { rows: rows || '<tr><td colspan="3" class="center">No scores yet</td></tr>', note: board.note };
}

// Primary: KS1 / KS2 tabs sharing one table
const primaryBody = document.getElementById('board-primary');
const primaryNote = document.getElementById('note-primary');
const tabs = document.querySelectorAll('[data-board]');
function showPrimary(id) {
  const { rows, note } = render(id);
  primaryBody.innerHTML = rows;
  primaryNote.textContent = note;
  tabs.forEach((t) => t.setAttribute('aria-selected', t.dataset.board === id));
}
tabs.forEach((t) => t.addEventListener('click', () => showPrimary(t.dataset.board)));
showPrimary('ks1');

const secondary = render('secondary');
document.getElementById('board-secondary').innerHTML = secondary.rows;
document.getElementById('note-secondary').textContent = secondary.note;
