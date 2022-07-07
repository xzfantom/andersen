const ERROR_MESSAGE = 'ERROR';
const MAX_DIGITS = 14;
const MAX_DECIMAL = 8;

export class Calculator {
  constructor() {
    this.currentValue = '';
    this.previousValue = '';
    this.operation = null;
  }

  bindScreenChanged = (callback) => {
    this.screenChanged = callback;
  }

  setOperand = (anotherValue) => {
    if (this.operation === null && this.previousValue !== '') {
      this.previousValue = '';
    }
    let hasDecimal = this.currentValue.indexOf('.') !== -1;
    if (anotherValue === '.' && hasDecimal) {
      return;
    }
    if (this.currentValue.length >= MAX_DIGITS) {
      return;
    }
    if (this.currentValue === '' && anotherValue === '0') {
      return;
    }
    if (this.currentValue === '' && anotherValue === '.') {
      this.currentValue = '0';
    }
    if (hasDecimal) {
      const decimalDigits = this.currentValue.split('.')[1];
      if (decimalDigits.length >= MAX_DECIMAL) {
        return;
      }
    }
    this.currentValue += anotherValue;
    this.screenChanged(this.currentValue);
  }

  setOperation = (value) => {
    if (this.previousValue === '') {
      this.operation = value;
      this.previousValue = this.currentValue;
      this.currentValue = '';
    } else if (this.currentValue === '') {
      this.operation = value;
    } else {
      this.makeResult();
      this.operation = value;
    }
  }

  makeResult = () => {
    if (this.previousValue === '' || this.currentValue === '') {
      return;
    }
    const handler = this[this.operation];
    if (!handler) {
      return;
    }
    this.operation = null;
    let result = handler();
    if (this.isValid(result)) {
      this.currentValue = '';
      this.previousValue = this.roundResult(result);
      if (this.previousValue.length > MAX_DIGITS) {
        this.previousValue = '';
        this.screenChanged(ERROR_MESSAGE);
      } else {
        this.screenChanged(this.previousValue);
      }
    } else {
      this.previousValue = '';
      this.currentValue = '';
      this.screenChanged(ERROR_MESSAGE);
    }
  }

  clear = () => {
    this.currentValue = '';
    this.operation = null;
    this.screenChanged(this.currentValue);
  }

  backspace = () => {
    if (this.currentValue === '') {
      return;
    }
    this.currentValue = this.currentValue.slice(0, -1);
    this.screenChanged(this.currentValue);
  }

  sign = () => {
    if (this.currentValue === '') {
      return;
    }
    if (this.currentValue[0] === '-') {
      this.currentValue = this.currentValue.slice(1);
    } else {
      this.currentValue = '-' + this.currentValue;
    }
    this.screenChanged(this.currentValue);
  }

  plus = () => {
    return parseFloat(this.previousValue) + parseFloat(this.currentValue);
  }

  minus = () => {
    return parseFloat(this.previousValue) - parseFloat(this.currentValue);
  }

  multiply = () => {
    console.log(this.previousValue, parseFloat(this.previousValue), this.currentValue, parseFloat(this.currentValue));
    return parseFloat(this.previousValue) * parseFloat(this.currentValue);
  }

  divide = () => {
    return parseFloat(this.previousValue) / parseFloat(this.currentValue);
  }

  isValid = (number) => {
    return (!isNaN(number) && isFinite(number));
  }

  roundResult = (value) => {
    let limit = Math.pow(10, MAX_DECIMAL);
    return String(Math.round(value * limit) / limit);
  }

}