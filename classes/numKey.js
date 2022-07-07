import { Button } from "./button.js";

export class NumKey extends Button {
  class = "num-key";

  constructor({ title, value, type }) {
    let button = super({ title, value, type });
    button.classList.add(this.class);

    return button;
  }


}