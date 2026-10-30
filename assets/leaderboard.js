// National Hole-in-One Challenge leaderboard.
// To update: edit the list below (any order, it's sorted by points) and change UPDATED.
const UPDATED = 'Updated soon with this season’s scores';

const SCHOOLS = [
  { school: 'Derwent Vale Primary', area: 'Cumbria', points: 27 },
  { school: 'New York Primary', area: 'North Shields', points: 25 },
  { school: 'Ash Green Community', area: 'Halifax', points: 14 },
  { school: 'Mab Lane Primary', area: 'Merseyside', points: 13 },
];

const rows = [...SCHOOLS]
  .sort((a, b) => b.points - a.points)
  .map(
    (s, i) => `<tr>
      <td><span class="rank">${i + 1}</span></td>
      <td><span class="school">${s.school}</span><span class="area">${s.area}</span></td>
      <td><span class="pts">${s.points}</span> pts</td>
    </tr>`
  )
  .join('');

document.getElementById('board-body').innerHTML = rows;
document.getElementById('board-updated').textContent = UPDATED;
