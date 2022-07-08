export class Screen {

  constructor() {
    this.value = 0;
    this.input;
  }

  render = () => {
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('readonly', true);
    this.input.setAttribute('value', this.value);
    this.input.classList.add('screen');
    return this.input;
  }

  setValue = (newValue) => {
    if (newValue === '') {
      this.input.setAttribute('value', '0');
    } else {
      this.input.setAttribute('value', newValue);
    }
  }
}