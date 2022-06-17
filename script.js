const ERROR_MESSAGE = 'Некорректный ввод!';

const task1 = function () {
  let number = parseInt(prompt('Введите число'), 10);
  let base = parseInt(prompt('Введите основание'), 10);
  if (isNaN(number) || isNaN(base)) {
    console.log(ERROR_MESSAGE);
  } else {
    console.log(number.toString(base));
  }
};

document.getElementById('task1').addEventListener('click', task1);

const getNumber = function () {
  let num = parseInt(prompt('Введите число'), 10);
  if (isNaN(num)) {
    throw new Error(ERROR_MESSAGE);
  }
  return num;
};

const task2 = function () {
  try {
    let firstNumber = getNumber();
    let secondNumber = getNumber();
    console.log(`Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`);
  } catch (error) {
    console.log(error.message);
  }
};

document.getElementById('task2').addEventListener('click', task2);
