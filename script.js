Array.prototype.myFilter = function (callback, thisArg) {
  const result = [];
  this.forEach((value, index, array) => {
    if (callback.call(thisArg, value, index, array)) {
      result.push(value);
    }
  });
  return result;
}

const createDebounceFunction = function (callback, interval) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, interval);
  }
}
