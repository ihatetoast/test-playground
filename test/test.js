const expect = require("chai").expect;
// const factorialize = require("../factorialize");
// const isPrime = require("../isPrime");
const palindrome = require("../palindrome");



/***************
 * FACTORIALIZE
 ***************/
// describe("Factorialize", ()=>{
//   it("should return a number", ()=>{
//     expect(factorialize('5')).to.be.a('number');
//   });
//   it("if num is string, convert to number", ()=>{
//     expect(factorialize('5')).to.equal(120);
//   });
//   it("correctly factorializes an integer", ()=>{
//     expect(factorialize(5)).to.equal(120);
//   })
// });

/***********
 * ISPRIME *
 ***********/
// describe("IsPrime", ()=>{
//   it("argument passed is a number", ()=>{
//     expect(isPrime('a')).to.be.false;
//     expect(isPrime(3)).to.be.true;
//   });
//   it("argument passed is an integer", () =>{
//     expect(isPrime(4.56)).to.be.false;
//   });
//   it("returns true if number is prime", () =>{
//     expect(isPrime(186)).to.be.false;
//   });
//   it("works for very large numbers", () =>{
//     expect(isPrime(524287)).to.be.true;
//   });
// })

/**************
 * PALINDROME *
 **************/
describe("Palindrome", function() {
  it("To return true if string is a palindrome", function() {
    expect(palindrome("bob")).to.be.true;
  });
  it("To return true if number is a palindrome", function() {
    expect(palindrome(678876)).to.be.true;
  });
  it("To ignore any capitalization ", function() {
    expect(palindrome("Bob")).to.be.true;
  });
  it("To return FALSE if phrase not a palindrome.", function() {
    expect(palindrome("never eat toast")).to.be.false;
  });
  it("To ignore spacing.", function() {
    expect(palindrome("never odd or even")).to.be.true;
  });
  it("To ignore anything not a-z.", function() {
    expect(palindrome("*boob")).to.be.true;
  });
  it("To return true even if alpha are mixed with num.", function() {
    expect(palindrome("b00b")).to.be.true;
  });

});
