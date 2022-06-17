const errorMessage = 'Некорректный ввод!';

function task1() {
  let number = parseInt(prompt('Введите число'), 10);
  let base = parseInt(prompt('Введите основание'), 10);
  if (Object.is(number, NaN) || Object.is(base, NaN)) {
    console.log(errorMessage);
  } else {
    console.log(number.toString(base));
  }
}

function task2() {
  let firstNumber = parseInt(prompt('Введите число'), 10);
  if (Object.is(firstNumber, NaN)) {
    console.log(errorMessage);

    return;
  }
  let secondNumber = parseInt(prompt('Введите число'), 10);
  if (Object.is(secondNumber, NaN)) {
    console.log(errorMessage);

    return;
  }
  console.log(`Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`);
}

document.getElementById('task1').addEventListener('click', task1);
document.getElementById('task2').addEventListener('click', task2);
