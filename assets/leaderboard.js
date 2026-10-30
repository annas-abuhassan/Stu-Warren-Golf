// National leaderboards. To update: edit the lists below (any order, they're
// sorted by points) and change the notes.
const BOARDS = {
  primary: {
    note: 'Updated soon with this season’s scores.',
    schools: [
      { school: 'Derwent Vale Primary', area: 'Cumbria', points: 27 },
      { school: 'New York Primary', area: 'North Shields', points: 25 },
      { school: 'Ash Green Community', area: 'Halifax', points: 14 },
      { school: 'Mab Lane Primary', area: 'Merseyside', points: 13 },
    ],
  },
  secondary: {
    note: 'First Swing launches in 2027. Could your school be the first name on the board?',
    schools: [],
  },
};

for (const [id, board] of Object.entries(BOARDS)) {
  const rows = [...board.schools]
    .sort((a, b) => b.points - a.points)
    .map(
      (s, i) => `<tr>
        <td><span class="rank">${i + 1}</span></td>
        <td><span class="school">${s.school}</span><span class="area">${s.area}</span></td>
        <td><span class="pts">${s.points}</span> pts</td>
      </tr>`
    )
    .join('');
  document.getElementById(`board-${id}`).innerHTML =
    rows || '<tr><td colspan="3" class="center">No scores yet</td></tr>';
  document.getElementById(`note-${id}`).textContent = board.note;
}
