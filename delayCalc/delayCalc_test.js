var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

var Calculator = function() {};

Calculator.prototype = {
  add(a,b) {
    return a+b;
  },

  subtract(a,b) {
    return a-b;
  },

  multiply(a,b) {
    return a*b;
  },

  divide(a,b) {
    return b === 0 ? NaN : a/b;
  },
};

function delay(time, obj, method, values) {
  return new Promise(function(resolve, reject) {
    try {
      sleep(time);
      resolve(obj[method](values[0], values[1]));
    } catch (e) {
      reject(e);
    };
  });
};

describe( "delay", function(){
  var calculator = new Calculator();

  it( "returns a promise", function(){
    var willAdd = delay( 100, calculator, 'add', [ 1, 1 ] );
    expect( willAdd ).to.be.instanceOf( Promise );
    expect( willAdd ).to.be.fulfilled;
  } );

  it( "delays execution", function(){
    expect( delay( 1000, calculator, 'add', [ 10, 5 ] ) ).to.eventually.equal( 15 );
    expect( delay( 500, calculator, 'subtract', [ 9, 5 ] ) ).to.eventually.equal( 4 );
  } );

  it( "cannot execute functions that do not exist", function(){
    expect( delay( 1000, calculator, 'sqrt', [ 2, 2 ] ) ).to.be.rejected;
  } );

} );
