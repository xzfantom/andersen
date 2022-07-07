class Button {
  constructor({ title, value, type }) {
    this.title = title;
    this.value = value;
    this.type = type;

    return this.render();
  }

  render() {
    const button = document.createElement('button');
    button.innerText = this.title;
    button.setAttribute('data-value', this.value);
    button.setAttribute('data-type', this.type);

    return button;
  }
}

export { Button };