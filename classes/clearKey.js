import { Button } from "./button.js";

export class ClearKey extends Button {
  class = "clear-key";

  constructor({ title, value, type }) {
    let button = super({ title, value, type });
    button.classList.add(this.class);
    return button;
  }
}