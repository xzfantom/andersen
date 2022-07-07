import { Calculator } from './classes/calculator.js';
import { View } from './classes/view.js';
import { Controller } from './classes/controller.js';

const CALCULATOR_CONFIG = {
  0: { type: 'number', value: 7, title: '7' },
  1: { type: 'number', value: 8, title: '8' },
  2: { type: 'number', value: 9, title: '9' },
  3: { type: 'special', value: 'sign', title: '+/-' },
  4: { type: 'special', value: 'backspace', title: '<-' },
  6: { type: 'number', value: 4, title: '4' },
  7: { type: 'number', value: 5, title: '5' },
  8: { type: 'number', value: 6, title: '6' },
  9: { type: 'operator', value: 'multiply', title: '*' },
  10: { type: 'operator', value: 'divide', title: '/' },
  11: { type: 'number', value: 1, title: '1' },
  12: { type: 'number', value: 2, title: '2' },
  13: { type: 'number', value: 3, title: '3' },
  14: { type: 'operator', value: 'minus', title: '-' },
  15: { type: 'result', value: 'equal', title: '=' },
  16: { type: 'special', value: 'clear', title: 'C' },
  17: { type: 'number', value: 0, title: '0' },
  18: { type: 'number', value: '.', title: '.' },
  19: { type: 'operator', value: 'plus', title: '+' },
}

const view = new View(CALCULATOR_CONFIG)
const calc = new Calculator();

new Controller(calc, view);