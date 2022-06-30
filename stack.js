const ERROR_WRONG_DEPTH = 'Parameter Depth is invalid!';
const ERROR_STACK_FULL = 'Stack is full!';
const ERROR_STACK_EMPTY = 'Stack is empty!';
const ERROR_NOT_ITERABLE = 'Parameter is not iterable';

class Stack {
  #top;
  #maxDepth;
  #currentDepth;

  constructor(depth = 10) {
    if (typeof depth !== 'number' || depth < 0 || !isFinite(depth) || isNaN(depth)) {
      throw new Error(ERROR_WRONG_DEPTH);
    }

    this.#currentDepth = 0;
    this.#maxDepth = depth;
    this.#top = null;
  }

  #push(elem) {
    let newElement = {
      value: elem,
      next: this.#top,
    }
    this.#top = newElement;
    this.#currentDepth += 1;
  }

  push(elem) {
    if (this.#currentDepth >= this.#maxDepth) {
      throw new Error(ERROR_STACK_FULL);
    }
    this.#push(elem);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error(ERROR_STACK_EMPTY);
    }
    let { value, next } = this.#top;
    this.#top = next;
    this.#currentDepth -= 1;
    return value;
  }

  peek() {
    return this.#top ? this.#top.value : null;
  }

  isEmpty() {
    return !this.#top;
  }

  toArray() {
    let currentElement = this.#top;
    let result = [];
    while (currentElement) {
      result.push(currentElement.value);
      currentElement = currentElement.next;
    }
    return result;
  }

  static fromIterable(iterable) {
    if (typeof iterable?.[Symbol.iterator] !== 'function') {
      throw new Error(ERROR_NOT_ITERABLE);
    }
    const stack = new Stack(0);
    for (let elem of iterable) {
      stack.#push(elem);
    }
    stack.#maxDepth = stack.#currentDepth;
    return stack;
  }
}

module.exports = { Stack };
