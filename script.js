function task1() {
  let number = parseInt(window.prompt('Введите число'), 10);
  let base = parseInt(window.prompt('Введите основание'), 10);
  if (number === NaN || base === NaN) {
    console.log('Некорректный ввод!');
  } else {
    console.log(number.toString(base));
  }
}

function task2() {
  let firstNumber = parseInt(window.prompt('Введите число'), 10);
  if (firstNumber === NaN) {
    console.log('Некорректный ввод!');

    return;
  }
  let secondNumber = parseInt(window.prompt('Введите число'), 10);
  if (secondNumber === NaN) {
    console.log('Некорректный ввод!');

    return;
  }
  console.log(`Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`);
}
