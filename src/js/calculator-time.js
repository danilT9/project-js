function convertTimecalcMinutes() {
  const input = document.getElementById('timecalc-minutesInput').value.trim();
  const minutesTotal = parseInt(input, 10);

  if (isNaN(minutesTotal) || minutesTotal < 0) {
    document.getElementById('timecalc-result').textContent =
      'Некоректне значення';
    return;
  }

  const days = Math.floor(minutesTotal / 1440);
  const hours = Math.floor((minutesTotal % 1440) / 60);
  const minutes = minutesTotal % 60;

  let result = '';

  if (days > 0) {
    result += `${days} дн. `;
  }

  const paddedHours = hours.toString().padStart(1, '0');
  const paddedMinutes = minutes.toString().padStart(2, '0');

  result += `${paddedHours}:${paddedMinutes}`;

  document.getElementById('timecalc-result').textContent = result;

  document.querySelector('#timecalc-minutesInput').value = '';
}

document
  .querySelector('#timecalc-button')
  .addEventListener('click', convertTimecalcMinutes);
