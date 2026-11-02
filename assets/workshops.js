// Hide workshop dates (and their booking options) once the day has passed.
const today = new Date().toISOString().slice(0, 10);
const select = document.getElementById('workshop-interest');

document.querySelectorAll('#workshop-dates li').forEach((li) => {
  if (li.dataset.date >= today) return;
  li.remove();
  select.querySelector(`option[data-date="${li.dataset.date}"]`)?.remove();
});

if (!document.querySelector('#workshop-dates li')) {
  document.getElementById('workshop-dates').innerHTML =
    '<li><strong>New dates coming soon</strong><span>Get in touch to register interest</span></li>';
}
