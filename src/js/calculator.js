let operation = null;

function setOperation(op) {
  operation = op;
}

function calculateResult() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultInput = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultInput.value = 'Введіть правильні числа';
    return;
  }

  if (!operation) {
    resultInput.value = 'Оберіть операцію';
    return;
  }

  let result;
  let operationText;

  switch (operation) {
    case '+':
      result = num1 + num2;
      operationText = `${num1} + ${num2} = ${result}`;
      break;
    case '-':
      result = num1 - num2;
      operationText = `${num1} - ${num2} = ${result}`;
      break;
    case '*':
      result = num1 * num2;
      operationText = `${num1} * ${num2} = ${result}`;
      break;
    case '/':
      if (num2 === 0) {
        resultInput.value = 'Ділення на 0 неможливе';
        return;
      }
      result = num1 / num2;
      operationText = `${num1} / ${num2} = ${result}`;
      break;
    default:
      resultInput.value = 'Невідома операція';
      return;
  }

  resultInput.value = operationText;
}

document.querySelectorAll('.buttons-group .circle-btn').forEach(btn => {
  btn.addEventListener('click', () => setOperation(btn.textContent));
});

document.querySelector('#equals').addEventListener('click', calculateResult);
