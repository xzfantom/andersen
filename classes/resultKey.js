import { Button } from "./button.js";

export class ResultKey extends Button {
  class = "result-key";

  constructor({ title, value, type }) {
    let button = super({ title, value, type });
    button.classList.add(this.class);
    return button;
  }
}