var expect = require("chai").expect;
var palindrome = require("../palindrome");

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

});
