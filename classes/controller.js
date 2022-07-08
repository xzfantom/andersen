export class Controller {

  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.bindNumPad(this.processNumPad);
    model.bindScreenChanged(view.updateScreen);
  }

  processNumPad = (event) => {
    if (event.target.hasAttribute('data-value')) {
      const type = event.target.getAttribute('data-type');
      const value = event.target.getAttribute('data-value');
      switch (type) {
        case 'number':
          this.model.setOperand(value);
          break;
        case 'operator':
          this.model.setOperation(value);
          break;
        case 'result':
          this.model.makeResult();
          break;
        case 'special':
          if (value === 'backspace') {
            this.model.backspace();
          } else if (value === 'clear') {
            this.model.clear();
          } else if (value === 'sign') {
            this.model.sign();
          }
        default:
          return;
      }
    }
  }
}