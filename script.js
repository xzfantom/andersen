/////////////////////////////////////////////////
//                    TASK 1                   //
/////////////////////////////////////////////////
const concatStrings = function (str, separator) {
  if (typeof str !== 'string') {
    return '';
  }
  let acc = str;
  let sep = '';
  if (typeof separator === 'string') {
    sep = separator;
  }
  const result = function (newStr, newSep) {
    if (typeof newStr === 'string') {
      acc = acc + sep + newStr;
    } else {
      return acc;
    }
    if (typeof newSep === 'string') {
      sep = newSep;
    }
    return result;
  }
  return result;
}

/////////////////////////////////////////////////
//                    TASK 2                   //
/////////////////////////////////////////////////
const ERROR_WRONG_NUMBERS = 'Введенные аргументы не верны!';
const ERROR_WRONG_NUMBER = 'Введенный аргумент не верен!';
const ERROR_DIVIVSION_BY_ZERO = 'Деление на ноль!';

class Calculator {
  x
  y

  constructor(x, y) {
    if (!this.#isValid(x) || !this.#isValid(y)) {
      throw new Error(ERROR_WRONG_NUMBERS);
    }
    this.x = x;
    this.y = y;
  }

  setX(x) {
    if (!this.#isValid(x)) {
      throw new Error(ERROR_WRONG_NUMBER);
    }
    this.x = x;
  }

  setY(y) {
    if (!this.#isValid(y)) {
      throw new Error(ERROR_WRONG_NUMBER);
    }
    this.y = y;
  }

  logSum = () => {
    console.log(this.x + this.y);
  }

  logMul = () => {
    console.log(this.x * this.y);
  }

  logSub = () => {
    console.log(this.x - this.y);
  }

  logDiv = () => {
    if (this.y === 0) {
      throw new Error(ERROR_DIVIVSION_BY_ZERO);
    }
    console.log(this.x / this.y);
  }

  #isValid = (num) => {
    return (typeof num === 'number' && !isNaN(num) && isFinite(num))
  }
}
