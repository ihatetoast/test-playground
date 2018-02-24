const expect = require("chai").expect;
// const palindrome = require("../palindrome");
const isPrime = require("../isPrime");

/***********
 * ISPRIME *
 ***********/
describe("IsPrime", ()=>{
  it("argument passed is a number", ()=>{
    expect(isPrime('a')).to.be.false;
    expect(isPrime(3)).to.be.true;
  });
  it("argument passed is an integer", () =>{
    expect(isPrime(4.56)).to.be.false;
  });
  it("returns true if number is prime", () =>{
    expect(isPrime(186)).to.be.false;
  });
  it("works for very large numbers", () =>{
    expect(isPrime(524287)).to.be.true;
  });
})

/**************
 * PALINDROME *
 **************/
// describe("Palindrome", function() {
//   it("To return true if string is a palindrome", function() {
//     expect(palindrome("bob")).to.be.true;
//   });
//   it("To return true if number is a palindrome", function() {
//     expect(palindrome(678876)).to.be.true;
//   });

//   it("To ignore any capitalization ", function() {
//     expect(palindrome("Bob")).to.be.true;
//   });

// });
