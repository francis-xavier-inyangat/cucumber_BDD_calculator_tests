
let World;
module.exports.World = (World = function(callback) {

  const Calc = require('../../models/calc');
  this.calc = new Calc;



  this.clearCalculator = function() {
    this.calc.clearCalculator();
  };

  this.add = function(arg) {
    this.calc.add(Number(arg));
  };

  this.substract = function(arg) {
    this.calc.substract(Number(arg));
  };

  this.multiply = function(arg1,arg2) {
    this.calc.multiply(Number(arg1,Number(arg2)));
  };

  this.result = function() {
    return this.calc.result();
  };

  this.doBeforeScenario = function() {
    console.log('Before scenario prep code');
  };

  this.doAfterScenario = function() {
    console.log('After scenario cleanup code');
  };

  callback();
});