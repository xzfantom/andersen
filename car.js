class Car {
  #brand; //(строка от 1 до 50 символов включительно)
  #model; //(строка от 1 до 50 символов включительно)
  #yearOfManufacturing; //(число от 1900 до текущего года включительно)
  #maxSpeed; //(число от 100 до 300 км/ч)
  #maxFuelVolume; //(число в литрах от 5 до 20)
  #fuelConsumption; //(число в л/100км)
  #currentFuelVolume; //(число в литрах, по умолчанию 0)
  #isStarted; //(логический тип, по умолчанию false)
  #mileage; //(число в километрах, по умолчанию 0)

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
      throw new Error('Wrong brand name!');
    }
    this.#brand = brand;
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    if (!this.constructor.#checkString(model, 1, 50)) {
      throw new Error('Wrong model name!');
    }
    this.#model = model;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(yearOfManufacturing) {
    let currentYear = new Date().getFullYear();
    if (!this.constructor.#checkInt(yearOfManufacturing, 1900, currentYear)) {
      throw new Error('Wrong manufacturing year!');
    }
    this.#yearOfManufacturing = yearOfManufacturing;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(maxSpeed) {
    if (!this.constructor.#checkNumber(maxSpeed, 100, 300)) {
      throw new Error('Wrong maximum speed!');
    }
    this.#maxSpeed = maxSpeed;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(maxFuelVolume) {
    if (!this.constructor.#checkNumber(maxFuelVolume, 5, 20)) {
      throw new Error('Wrong maximum fuel volume!');
    }
    this.#maxFuelVolume = maxFuelVolume;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(fuelConsumption) {
    if (!this.constructor.#checkNumber(fuelConsumption, 0)) {
      throw new Error('Wrong fuel consumption!');
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
    if (this.#isStarted) {
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
      throw new Error('Wrong parameter isStarted!');
    }
    this.#isStarted = isStarted;
  }

  #setMileage(mileage) {
    if (!this.constructor.#checkNumber(mileage, 0)) {
      throw new Error('Wrong mileage!');
    }
    this.#mileage = mileage;
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

const car = new Car('Toyota', 'Prado', 1997, 280, 20, 1);