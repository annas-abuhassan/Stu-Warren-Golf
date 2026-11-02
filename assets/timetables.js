// Sample timetables from Stu's 2027 timetable sheet. Each option has one or
// two columns of [time, session] rows; a row with no time is a break.
const TIMETABLES = [
  {
    name: 'Option 1',
    title: 'Whole school, Year 6 first',
    note: 'Reception to Year 6, with the oldest pupils in the morning.',
    cols: [[
      ['9:00 – 9:45', 'Year 6'],
      ['9:45 – 10:30', 'Year 5'],
      [null, 'Break'],
      ['10:45 – 11:20', 'Year 4'],
      ['11:20 – 12:00', 'Year 3'],
      [null, 'Lunch'],
      ['1:00 – 1:45', 'Year 2'],
      ['1:45 – 2:30', 'Year 1'],
      ['2:30 – 3:00', 'Reception'],
    ]],
  },
  {
    name: 'Option 2',
    title: 'Whole school, Reception first',
    note: 'Reception to Year 6, with longer afternoon sessions for Years 5 and 6.',
    cols: [[
      ['9:00 – 9:30', 'Reception'],
      ['9:30 – 10:00', 'Year 1'],
      ['10:00 – 10:30', 'Year 2'],
      [null, 'Break'],
      ['10:45 – 11:20', 'Year 3'],
      ['11:20 – 12:00', 'Year 4'],
      [null, 'Lunch'],
      ['1:00 – 2:00', 'Year 5'],
      ['2:00 – 3:00', 'Year 6'],
    ]],
  },
  {
    name: 'Option 3',
    title: 'KS2 only',
    note: 'Two sessions for each year group from Year 3 to Year 6.',
    cols: [[
      ['9:00 – 9:45', 'Year 6'],
      ['9:45 – 10:30', 'Year 6'],
      [null, 'Break'],
      ['10:45 – 11:20', 'Year 5'],
      ['11:20 – 12:00', 'Year 5'],
      [null, 'Lunch'],
      ['1:00 – 1:30', 'Year 4'],
      ['1:30 – 2:00', 'Year 4'],
      ['2:00 – 2:30', 'Year 3'],
      ['2:30 – 3:00', 'Year 3'],
    ]],
  },
  {
    name: 'Option 4',
    title: 'Small schools or specific year groups',
    note: 'Two classes each enjoy all three golf experiences across the day.',
    cols: [[
      ['9:00 – 9:45', 'Class 1 – Drive game'],
      ['9:45 – 10:30', 'Class 2 – Drive game'],
      [null, 'Break'],
      ['10:45 – 11:20', 'Class 1 – Chipping game'],
      ['11:20 – 12:00', 'Class 2 – Chipping game'],
      [null, 'Lunch'],
      ['1:00 – 2:00', 'Class 1 – 6-hole putting course'],
      ['2:00 – 3:00', 'Class 2 – 6-hole putting course'],
    ]],
  },
  {
    name: 'Option 5',
    title: 'Two-form entry schools',
    note: 'Twenty-minute sessions so every class in a two-form entry school gets its turn.',
    cols: [
      [
        ['9:00 – 9:20', 'Reception – Putting'],
        ['9:20 – 9:40', 'Reception – Putting'],
        ['9:40 – 10:00', 'Year 1 – Putting'],
        ['10:00 – 10:20', 'Year 1 – Putting'],
        ['10:20 – 10:40', 'Year 2 – Putting'],
        ['10:40 – 11:00', 'Year 2 – Putting'],
        ['11:00 – 11:20', 'Year 3 – Chipping'],
        ['11:20 – 11:40', 'Year 3 – Chipping'],
        ['11:40 – 12:00', 'Year 4 – Chipping'],
      ],
      [
        [null, 'Lunch'],
        ['1:00 – 1:20', 'Year 4 – Chipping'],
        ['1:20 – 1:40', 'Year 5 – Driving'],
        ['1:40 – 2:00', 'Year 5 – Driving'],
        ['2:00 – 2:30', 'Year 6 – Driving'],
        ['2:30 – 3:00', 'Year 6 – Driving'],
      ],
    ],
  },
];

const tabs = document.querySelector('.tt-tabs');
const panel = document.getElementById('tt-panel');

function table(rows) {
  const body = rows
    .map(([time, what]) =>
      time
        ? `<tr><td>${time}</td><td>${what}</td></tr>`
        : `<tr class="brk"><td colspan="2">${what}</td></tr>`
    )
    .join('');
  return `<table class="tt"><tbody>${body}</tbody></table>`;
}

function show(i) {
  const t = TIMETABLES[i];
  tabs.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-selected', i === j));
  panel.innerHTML = `
    <h3>${t.name}: ${t.title}</h3>
    <p>${t.note}</p>
    <div class="${t.cols.length > 1 ? 'tt-cols' : ''}">${t.cols.map(table).join('')}</div>`;
}

TIMETABLES.forEach((t, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.setAttribute('role', 'tab');
  b.textContent = t.title;
  b.addEventListener('click', () => show(i));
  tabs.appendChild(b);
});
show(0);
