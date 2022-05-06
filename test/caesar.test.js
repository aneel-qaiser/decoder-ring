// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

const testWords = [
    "thinkful",
    "qefkhcri",
    "This is a secret message!",
    "BPQA qa I amkzmb umaaiom!",
];

describe("caesar cipher", () => {
    it ("should return a message with each character shifted 3 times", () => {
        const actual = caesar(testWords[0],3,true);
        const expected = "wklqnixo";
        expect(actual).to.equal(expected);
    });
    it ("should return a message with each character shifted 3 times without encoder passed into function", () =>{
        const actual = caesar(testWords[0],3);
        const expected = "wklqnixo";
        expect(actual).to.equal(expected);
    });
    it ("should return a message with character shifted -3 times when a negative number is passed into function", () => {
        const actual = caesar(testWords[0], -3);
        const expected = testWords[1];
        expect(actual).to.equal(expected);
    });
    it ("should return a message with each character decoded (shifted -3 times)", () => {
        const actual = caesar(testWords[0], 3, false);
        const expected = testWords[1];
        expect(actual).to.equal(expected);
    });
    it ("should return a message with all punctuation exactly the same as the input", () => {
        const actual = caesar(testWords[2], 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.equal(expected);
    });
    it ("should return a message that is decoded with all punctuation exactly the same as input", () => {
        const actual = caesar(testWords[3], 8, false);
        const expected = "this is a secret message!";
        expect(actual).to.equal(expected);
    });
    it("should return false when shift parameter is too large", () => {
        const actual = caesar(testWords[0], 1000);
        expect(actual).to.be.false;
    });
    it("should return false when shift parameter is too small", () => {
        const actual = caesar(testWords[0], -1000);
        expect(actual).to.be.false;
    });
})