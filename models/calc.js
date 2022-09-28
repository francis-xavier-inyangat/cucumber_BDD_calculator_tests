/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
class Calc {
  static initClass() {
    this.prototype._currentSum = 0;
  }

  constructor() {
    // nothing to do in this constructor
  }

  clearCalculator() {
    this._currentSum = 0;
  }

  add(arg) {
    this._currentSum = this._currentSum + arg;
  }

  substract(arg) {
    this._currentSum = this._currentSum - arg;
  }

  multiply(arg1,arg2) {
    this._currentSum = arg1*arg2;
  }

  result() {
    return this._currentSum;
  }
}
Calc.initClass();

module.exports = Calc;