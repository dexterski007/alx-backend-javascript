export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const cclone = new this.constructor();
    const objectSymbols = Object.getOwnPropertySymbols(this);
    objectSymbols.forEach((symbol) => {
      cclone[symbol] = this.symbol;
    });
    return cclone;
  }
}
