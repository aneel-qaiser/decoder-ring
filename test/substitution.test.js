// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution");

const testCases = [
    substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"),
    substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"),
    substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false),
    substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"),
    substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false),
    substitution("thinkful", "short"),
    substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
]

describe("polybius square", () => {
    it ("should return encoded string", () => {
        expect(testCases[0]).to.equal("jrufscpw");
    });
    it ("should return encoded string including spaces and ignoring capital letters", () => {
        expect(testCases[1]).to.equal("elp xhm xf mbymwwmfj dne");
    });
    it ("should return decoded message", () => {
        expect(testCases[2]).to.equal("thinkful");
    });
    it ("should return encoded message including special characters", () => {
        expect(testCases[3]).to.equal("y&ii$r&");
    });
    it ("should return decoded message even with special characters in the input", () => {
        expect(testCases[4]).to.equal("message");
    });
    it ("should return false since it is too short", () => {
        expect(testCases[5]).to.be.false;
    });
    it ("should return false since it is uneven and has duplicates", () => {
        expect(testCases[6]).to.be.false;
    });
});