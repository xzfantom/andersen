import { Screen } from './screen.js';
import { Button } from './button.js';
import { ClearKey } from './clearKey.js';
import { NumKey } from './numKey.js';
import { ResultKey } from './resultKey.js';

export class View {
  constructor(config) {
    this.root = document.querySelector('#root');
    this.screen = new Screen();
    this.config = config;

    this.init();
  }

  init = () => {
    this.numPad = document.createElement('div');
    this.numPad.classList.add('numpad');
    this.numPad.appendChild(this.screen.render());
    Object.keys(this.config).forEach((key) => {
      let buttonConfig = this.config[key];
      if (buttonConfig.type === 'number') {
        this.numPad.appendChild(new NumKey(buttonConfig));
      } else if (buttonConfig.type === 'special') {
        this.numPad.appendChild(new ClearKey(buttonConfig));
      } else if (buttonConfig.type == 'result') {
        this.numPad.appendChild(new ResultKey(buttonConfig));
      } else {
        this.numPad.appendChild(new Button(buttonConfig));
      }
    });
    this.root.appendChild(this.numPad);
  }

  bindNumPad = (handler) => {
    this.numPad.addEventListener('click', handler);
  }

  updateScreen = (value) => {
    this.screen.setValue(value);
  }
}