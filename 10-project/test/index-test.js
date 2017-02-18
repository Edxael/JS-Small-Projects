//    http://chaijs.com/api/bdd/#method_equal
//    https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

var chai = require("chai");

var largestArr = require("../index");
var should = chai.should();

describe("larges of four arrays", function(){
  it("should return an array", function(){
    var result = largestArr([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    result.should.be.a("array");
  });
  it("should return the larget number frome each arry", function(){
    var result = largestArr([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    result.should.be.a("array");
    result.should.eql([5, 27, 39, 1001]);
  });
});
