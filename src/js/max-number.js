const inputs = document.querySelectorAll('.inputs input');
const result = document.querySelector('#max-number');

function checkMaxNumber() {
  const values = Array.from(inputs).map(input => input.value);

  if (values.every(value => value.trim() !== '')) {
    const numbers = values.map(Number);
    result.textContent = Math.max(...numbers);
  } else {
    result.textContent = '?';
  }
}

inputs.forEach(input => input.addEventListener('input', checkMaxNumber));
