export default class Building {
  constructor(sqft) {
    if (this.constructor === 'Building') {
      throw new TypeError('Cannot create classes directly');
    }
    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}
