class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume;
  #isStarted;
  #mileage;

  constructor(brand,
    model,
    year,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption,
    currentFuelVolume = 0,
    isStarted = false,
    mileage = 0) {

    this.brand = brand;
    this.model = model;
    this.yearOfManufacturing = year;
    this.maxSpeed = maxSpeed;
    this.maxFuelVolume = maxFuelVolume;
    this.fuelConsumption = fuelConsumption;
    this.#setCurrentFuelVolume(currentFuelVolume);
    this.#setIsStarted(isStarted);
    this.#setMileage(mileage);
  }

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    if (!this.constructor.#checkString(brand, 1, 50)) {
      throw new Error('Неверное им бренда');
    }
    this.#brand = brand;
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    if (!this.constructor.#checkString(model, 1, 50)) {
      throw new Error('Неверное наименование модели');
    }
    this.#model = model;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(yearOfManufacturing) {
    let currentYear = new Date().getFullYear();
    if (!this.constructor.#checkInt(yearOfManufacturing, 1900, currentYear)) {
      throw new Error('Неверная дата производства');
    }
    this.#yearOfManufacturing = yearOfManufacturing;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(maxSpeed) {
    if (!this.constructor.#checkNumber(maxSpeed, 100, 300)) {
      throw new Error('Неверная максимальная скорость');
    }
    this.#maxSpeed = maxSpeed;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(maxFuelVolume) {
    if (!this.constructor.#checkNumber(maxFuelVolume, 5, 20)) {
      throw new Error('Неверный максимальный объём топлива');
    }
    this.#maxFuelVolume = maxFuelVolume;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(fuelConsumption) {
    if (!this.constructor.#checkNumber(fuelConsumption, 0)) {
      throw new Error('Неверное потребление топлива');
    }
    this.#fuelConsumption = fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }
    this.#isStarted = false;
  }

  fillUpGasTank(volume) {
    if (!this.constructor.#checkNumber(volume, 0)) {
      throw new Error('Неверное количество топлива для заправки');
    }
    this.#setCurrentFuelVolume(this.#currentFuelVolume + volume);
  }

  drive(speed, time) {
    if (!this.constructor.#checkNumber(speed, 0) || speed === 0) {
      throw new Error('Неверная скорость');
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (!this.constructor.#checkNumber(time, 0) || time === 0) {
      throw new Error('Неверное количество часов');
    }
    if (!this.isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    let distance = speed * time;
    let fuelConsumed = distance / 100 * this.#fuelConsumption;
    this.#consumeFuel(fuelConsumed);
    this.#addMileage(distance);
  }

  #setCurrentFuelVolume(currentFuelVolume) {
    if (!this.constructor.#checkNumber(currentFuelVolume, 0)) {
      throw new Error('Неверное количество топлива в баке');
    }
    if (currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен')
    }
    this.#currentFuelVolume = currentFuelVolume;
  }

  #setIsStarted(isStarted) {
    if (typeof isStarted !== 'boolean') {
      throw new Error('Неверный параметр isStarted');
    }
    this.#isStarted = isStarted;
  }

  #setMileage(mileage) {
    if (!this.constructor.#checkNumber(mileage, 0)) {
      throw new Error('Неверное расстояние');
    }
    this.#mileage = mileage;
  }

  #consumeFuel(volume) {
    let fuelLeft = this.#currentFuelVolume - volume;
    if (fuelLeft < 0) {
      throw new Error('Недостаточно топлива');
    }
    this.#setCurrentFuelVolume(fuelLeft);
  }

  #addMileage(mileage) {
    let newMileage = this.#mileage + mileage;
    this.#setMileage(newMileage);
  }

  static #checkString(value, min, max) {
    return (typeof value === 'string' && value.length >= min && value.length <= max)
  }

  static #checkNumber(value, min, max) {
    return (typeof value === 'number' && value >= min && (max === undefined || value <= max))
  }

  static #checkInt(value, min, max) {
    return (Number.isSafeInteger(value) && value >= min && value <= max)
  }
}

module.exports = { Car };
