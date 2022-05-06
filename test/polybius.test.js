// Write your tests here!
const {expect} = require("chai");
const {polybius} = require("../src/polybius");

const testStrings = [
    polybius("thinkful"),
    polybius("Hello World"),
    polybius("3251131343 2543241341", false),
    polybius("4432423352125413", false),
    polybius("44324233521254134", false)
];

describe("polybius square", () => {
    it ("should return encoded string", () => {
        expect(testStrings[0]).to.equal("4432423352125413");
    });
    it ("should return encoded string including spaces and ignoring capital letters", () => {
        expect(testStrings[1]).to.equal("3251131343 2543241341");
    });
    it ("should return decoded string when encoded is set to false", () => {
        expect(testStrings[3]).to.equal("th(i/j)nkful");
    });
    it ("should return decoded string including spaces", () => {
        expect(testStrings[2]).to.equal("hello world");
    });
    it ("should return false because the length of the string of numbers is odd", () => {
        expect(testStrings[4]).to.be.false;
    });
});