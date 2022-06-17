const ERROR_MESSAGE = 'Ошибка!';
////////////////////////////////////////////
//                Task 1                  //
////////////////////////////////////////////

const copyArray = function (array) {
  let result = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    result[i] = makeObjectDeepCopy(array[i]);
  }
  return result;
};

const copySet = function (set) {
  let result = new Set();
  set.forEach((element) => {
    result.add(makeObjectDeepCopy(element));
  });
  return result;
};

const copyMap = function (map) {
  let result = new Map();
  map.forEach((value, key) => {
    result.set(key, makeObjectDeepCopy(value));
  });
  return result;
};

const makeObjectDeepCopy = function (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return copyArray(obj);
  }
  if (Object.prototype.toString.call(obj) === '[object Set]') {
    return copySet(obj);
  }
  if (Object.prototype.toString.call(obj) === '[object Map]') {
    return copyMap(obj);
  }
  let res = {};
  for (const [key, value] of Object.entries(obj)) {
    res[key] = makeObjectDeepCopy(value);
  }
  return res;
};

////////////////////////////////////////////
//                Task 2                  //
////////////////////////////////////////////

const selectFromInterval = function (array, intervalStart, intervalEnd) {
  if (!Array.isArray(array) || typeof intervalStart !== 'number' || typeof intervalEnd !== 'number') {
    throw new Error(ERROR_MESSAGE);
  }
  let [start, end] = intervalStart < intervalEnd ? [intervalStart, intervalEnd] : [intervalEnd, intervalStart];
  return array.filter((value) => {
    if (typeof value !== 'number') {
      throw new Error(ERROR_MESSAGE);
    }
    return value >= start && value <= end;
  });
};

////////////////////////////////////////////
//                Task 3                  //
////////////////////////////////////////////

const myIterable = {};
myIterable[Symbol.iterator] = function () {
  return {
    current: this.from,
    start: this.from,
    end: this.to,
    next() {
      if (typeof this.current !== 'number' || typeof this.end !== 'number' || this.start > this.end) {
        throw new Error(ERROR_MESSAGE);
      }
      if (this.current <= this.end) {
        return {
          done: false,
          value: this.current++,
        };
      } else {
        return { done: true };
      }
    },
  };
};
