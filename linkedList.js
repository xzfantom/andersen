const ERROR_NOT_ITERABLE = 'Parameter is not iterable';

class LinkedList {
  #top;
  #bottom;

  constructor() {
    this.#top = null;
    this.#bottom = null;
  }

  prepend(elem) {
    let newElement = {
      value: elem,
      next: this.#top,
    }
    this.#top = newElement;
    if (!this.#bottom) {
      this.#bottom = newElement;
    }
  }

  append(elem) {
    let newElement = {
      value: elem,
      next: null,
    }
    if (this.#bottom) {
      this.#bottom.next = newElement;
    }
    this.#bottom = newElement;
    if (!this.#top) {
      this.#top = newElement;
    }
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

  find(elem) {
    let currentElement = this.#top;
    while (currentElement !== null) {
      if (currentElement.value === elem) {
        return currentElement;
      }
      currentElement = currentElement.next;
    }
    return null;
  }

  static fromIterable(iterable) {
    if (typeof iterable?.[Symbol.iterator] !== 'function') {
      throw new Error(ERROR_NOT_ITERABLE);
    }
    const linkedList = new LinkedList();
    for (let elem of iterable) {
      linkedList.append(elem);
    }

    return linkedList;
  }
}

module.exports = { LinkedList };
