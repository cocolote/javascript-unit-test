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

describe( "Calculator", function(){
  var calculator;

  beforeEach( function(){
    calculator = new Calculator();
  });

  it( "adds 1 and 2", function(){
    expect( calculator.add( 1, 2 ) ).toEqual( 3 );
  });

  it( "subtracts 2 from 9", function(){
    expect( calculator.subtract( 9, 2 ) ).toEqual( 7 );
  });

  it( "multiplies 4 and 3", function(){
    expect( calculator.multiply( 4, 3 ) ).toEqual( 12 );
  });

  it( "divides 10 by 2", function(){
    expect( calculator.divide( 10, 2 ) ).toEqual( 5 );
  });

  it( "does not divide by 0", function(){
    expect( calculator.divide( 5, 0 ) ).toBeA( 'number' );
  });
});
