var expect = require('expect');

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

var ScfiCalculator = function() {};

ScfiCalculator.prototype = Calculator.prototype;
ScfiCalculator.prototype.sin = function(a) {
    return Math.sin(a);
};
ScfiCalculator.prototype.cos = function(a) {
    return Math.cos(a);
};
ScfiCalculator.prototype.tan = function(a) {
    return Math.tan(a);
};
ScfiCalculator.prototype.log = function(a) {
    return Math.log(a);
};

//  cos(a) {
//    return Math.cos(a);
//  },
//
//  tan(a) {
//    return Math.tan(a);
//  },
//
//  log(a) {
//    return Math.log(a);
//  },
//};

describe( "ScientificCalculator", function(){
  var calculator;

  beforeEach( function(){
    calculator = new ScfiCalculator();
  } );

  it( "extends Calculator", function(){
    expect( calculator ).toBeA( Calculator );
    expect( calculator ).toBeA( ScfiCalculator );
  } );

  it( "returns the sine of PI / 2", function(){
    expect( calculator.sin( Math.PI / 2 ) ).toEqual( 1 );
  } );

  it( "returns the cosine of PI", function(){
    expect( calculator.cos( Math.PI ) ).toEqual( -1 );
  } );

  it( "returns the tangent of 0", function(){
    expect( calculator.tan( 0 ) ).toEqual( 0 );
  } );

  it( "returns the logarithm of 1", function(){
    expect( calculator.log( 1 ) ).toEqual( 0 );
  } );
} );
